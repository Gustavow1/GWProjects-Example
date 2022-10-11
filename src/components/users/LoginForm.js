import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from '../project/ProjectForm.module.css'

function LoginForm({ handleSubmit, btnText, loginData }) {
    const [login, setLogin] = useState(loginData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(login)
    }

    function handleChange(e) {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }


    return (
        <form onSubmit={submit} className={styles.form} autoComplete="off" >
            <Input type="text" text="Nome do Usuário" name="name" placeholder="Insira o nome de usuário" handleOnChange={handleChange} value={login.name ? login.name: ''} required/>
            <Input type="email" text="Email" name="email" placeholder="Insira o seu email" handleOnChange={handleChange} value={login.email ? login.email: ''} required />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default LoginForm