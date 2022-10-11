import styles from './Project.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'
import ProjectForm from '../project/ProjectForm'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'



function Project() {
    const { id } = useParams()
    
    // const [project, setProject] = useState([])
    // const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()
    const user_id = localStorage.getItem('userid')

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch(`http://localhost:4000/users/${user_id}/${id}/services`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //     })
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             setProject(data)
    //             setServices(data.services)
    //         })
    //         .catch((err) => console.log(err))
    //     }, 500)
    //     }, [user_id, id])

    
    //     function editPost(project) {
    //         setMessage('')
    //         if(project.budget < project.cost) {
    //             setMessage('O orçamento não pode ser menor que o custo do projeto.')
    //             setType('error')
    //             return false
    //         }

    //         fetch(`http://localhost:4000/users/${user_id}/${project.id}/edit`, {
    //             method: 'PATCH',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(project)
    //         })
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             setProject(data)
    //             setShowProjectForm(false)
    //             setMessage('Projeto atualizado com sucesso!')
    //             setType('success')
    //         })
    //         .catch((err) => console.log(err))
    //     }

    //     async function createService(service){

    //         const response = await fetch(`http://localhost:4000/users/${user_id}/${project.id}/costcheck`, {
    //             method: 'PATCH',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(service)
    //         })
            
            
    //         const data = await response.json()
    //         if(data.status === 200){
    //             fetch(`http://localhost:4000/users/${user_id}/${project.id}/newservice`, {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify(service)
    //             })
    //             .then((resp) => resp.json())
    //             .then((data) => {
    //                 setShowServiceForm(false)
    //                 setProject(data)
    //                 setServices(data.services) // show services
    //                 setType('success')
    //                 setMessage('Serviço adicionado com sucesso!')
    //             })
    //             .catch((err) => console.log(err))
    //         }
    //         else{
    //             setMessage('Valor limite ultrapassado, para prosseguir, aumente o orçamento e tente novamente.')
    //         }
    //     }
            

    //     function removeService(id, cost) {
    //         const servicesUpdated = project.services.filter(
    //             (service) => service.id !== id
    //         )

    //         const projectUpdated = project

    //         projectUpdated.services = servicesUpdated
    //         projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)
            
    //         fetch(`http://localhost:4000/users/${user_id}/${projectUpdated.id}/${id}/deleteservice`, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //         })
    //         fetch(`http://localhost:4000/users/${user_id}/${projectUpdated.id}/edit`, {
    //             method: 'PATCH',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(projectUpdated)
    //         })
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             setProject(projectUpdated)
    //             setServices(servicesUpdated)
    //             setMessage('Serviço removido com sucesso!')
                
    //         })
    //         .catch((err) => console.log(err))
    //     }

        function toggleProjectForm() {
            setShowProjectForm(!showProjectForm)
        } 

        function toggleServiceForm() {
            setShowServiceForm(!showServiceForm)
        } 

        
        // Example version
        var services = [{
            id: 1,
            name: "Serviço de exemplo",
            cost: "5000",
            description: "Descrição de exemplo",
        }]

        var project = {
            id: 1,
            name: "Projeto exemplo",
            budget: "20000",
            cost: 5000,
            category: "Example",
            services: [
                {
                    id: 1,
                    name: "Serviço de exemplo",
                    cost: "5000",
                    description: "Descrição de exemplo",
                }
            ]
        }

        function editPost(){
            setShowProjectForm(false)
            setMessage('Projeto atualizado com sucesso!')
            setType('success')
        }
        
        function createService(){
            setShowServiceForm(false)
            setType('success')
            setMessage('Serviço adicionado com sucesso!')
        }

        function removeService(){
            setMessage('Serviço removido com sucesso!')
            project = {
                id: 1,
                name: "Projeto exemplo",
                budget: "20000",
                cost: 5000,
                category: "Example",
                services:['']
            }
            services = []
        } //<
    

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Categoria:</span> {project.category}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento:</span> R${project.budget}
                                    </p>
                                    <p>
                                        <span>Total utilizado:</span> R${project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <ProjectForm handleSubmit={editPost} btnText="Concluir edição" projectData={project} />
                                </div>
                            )}
                        </div>
                        <div className={styles.service_form_container}>
                            <h2>Adicione um serviço:</h2>
                            <button className={styles.btn} onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                            </button>
                            <div className={styles.project_info}>
                                {showServiceForm && (
                                    <ServiceForm handleSubmit={createService} btnText="Adicionar Serviço" />
                                )}
                            </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass="start">
                                {services.length > 0 &&
                                    services.map((service) => (
                                        <ServiceCard
                                            id={service.id}
                                            name={service.name}
                                            cost={service.cost}
                                            description={service.description}
                                            key={service.id}
                                            handleRemove={removeService}
                                        />
                                    ))
                               }
                                {services.length === 0 && 
                                    <p>Não há serviços cadastrados.</p>
                                } 

                        </Container>
                    </Container>
                </div> 
            ) : (
                <Loading />
            )} 

        </>
    )
}

export default Project

