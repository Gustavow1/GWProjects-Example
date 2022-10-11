import { useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react'

import Message from '../layout/Message'
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

import styles from './Projects.module.css'


function Projects() {
    // const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(true) // default: (false)
    const [projectMessage, setProjectMessage] = useState('')
    const user_id = localStorage.getItem('userid')

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    // useEffect(() => {
    //     setTimeout(() => 
    //         fetch(`http://localhost:4000/users/${user_id}/projects`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-type': 'application/json',
    //             },
    //         })
    //         .then(resp => resp.json())
    //         .then(data => {
    //             setProjects(data)
    //             setRemoveLoading(true)
    //         }),
    //      100,
    //     )
    // }, [user_id])

    // function removeProject(id) {

    //     fetch(`http://localhost:4000/users/${user_id}/${id}/deleteproject`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //     }).then(resp => resp.json())
    //     .then(() => {
    //         setProjects(projects.filter((project) => project.id !== id))
    //         setProjectMessage('Projeto removido com sucesso!')
    //     })
    //     .catch((err) => console.log(err))
    // }
    
    const projects = [{
        id: 1,
        name: "Projeto exemplo",
        budget: 20000,
        category: "Example",
    }]

    function removeProject(){
        setProjectMessage('Projeto removido com sucesso!')
    }

    return  (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
            <h1>Meus projetos</h1>
            <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="success" msg={message}  />}
            {projectMessage && <Message type="success" msg={projectMessage}  />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => ( <ProjectCard id={project.id} name={project.name} budget={project.budget} category={project.category} key={project.id}
                        handleRemove={removeProject}
                    />
                    ))}
                {!removeLoading && <Loading/>}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </Container>
        </div>
    )
}

export default Projects