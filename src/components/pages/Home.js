import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
    
    const LinkComp = function check(){
        if(localStorage.getItem('logged')){
            return <LinkButton to="/newproject" text="Criar Projeto"/>
        }
        else{
            return <LinkButton to="login" text="Clique aqui para fazer o login"/>
        }
    }
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>GWProjects</span></h1>
            <p>Gerencie aqui seus projetos!</p>
            <LinkComp/>
            <img src={savings} alt="GWP" />
        </section>
    )
}

export default Home