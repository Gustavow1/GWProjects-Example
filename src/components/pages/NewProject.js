import { useNavigate } from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject() {
    const user_id = localStorage.getItem('userid')
    const navigate = useNavigate()

    // function createPost(project) {
    //     // Initialize GWP and services
        

    //     fetch(`http://localhost:4000/users/${user_id}/newproject`, {
    //         method: "POST",
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //         body: JSON.stringify(project),
    //     })
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             navigate('/projects', { state: {message:'Projeto criado com sucesso!' }})
    //         })
    //         .catch((err) => console.log(err))
    // }
    function createPost(){ //Example function
        navigate('/projects', { state: {message:'Projeto criado com sucesso!' }})
    }


    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject