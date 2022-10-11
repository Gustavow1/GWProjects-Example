import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit, btnText, projectData }) {
    const [project, setProject] = useState(projectData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)

    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }


    return (
        <form onSubmit={submit} className={styles.form} autoComplete="off" >
            <Input type="text" text="Nome do projeto" name="name" placeholder="Nome do Projeto" handleOnChange={handleChange} value={project.name ? project.name: ''}/>
            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Orçamento Total" handleOnChange={handleChange} value={project.budget ? project.budget: ''}/>
            <Input type="text" text="Nome da categoria" name="category" placeholder="Insira uma Categoria" handleOnChange={handleChange} value={project.category ? project.category: ''} />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm