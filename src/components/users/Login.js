

import styles from './Login.module.css'
import LoginForm from './LoginForm'




function Login() {

    const user = {name: "UserExample", email: "email.example@mail.com"}

    function submit(login) {
        // fetch("http://localhost:4000/login", {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }, 
        //     body: JSON.stringify(login),
        //     })  
        //     .then((res) => { 
        //         if(res.status === 200){
        //             localStorage.setItem('username', login.name)
        //             localStorage.setItem('logged', true)
        //             return res.json()
        //         }
        //         else{
        //             console.log('usuario nao existe')
        //         }
        //     })
        //     .then((data) => {
        //         if (localStorage.getItem('logged')){
        //             localStorage.setItem('userid', data)
        //             window.location.href="/account"
        //         } 
                
        //     })
        // Example
        if(user.name === login.name && user.email === login.email){ 
            localStorage.setItem('username', login.name)
            localStorage.setItem('logged', true)
            localStorage.setItem('userid', 1)
            window.location.href="/account"
        }
        else{
            console.log('Usuário não encontrado.')
        }
    } //<


    return (
        <div className={styles.login_container}>
            <h1>Entrar na conta</h1>
            <LoginForm handleSubmit={submit} btnText="Acessar a conta" />
        </div>

    )
}

export default Login