import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import gcoin from '../../img/gcoin.webp'




function Navbar() {
    
    function Checkacc(props) {
        if(localStorage.getItem('logged') === null){
            return <li className={`${styles.show} ${styles[props.customClass]}`}>{props.children}</li>
        }
        else{
            return <li className={`${styles.item} ${styles[props.customClass]}`}>{props.children}</li>
        }
    }
    function Check(props) {
        if(localStorage.getItem('logged') === null){
            return <li className={`${styles.item} ${styles[props.customClass]}`}>{props.children}</li>
        }
        else{
            return <li className={`${styles.show} ${styles[props.customClass]}`}>{props.children}</li>
        }
    }
    
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"> <img src={gcoin} alt="gcoinlogo" className={styles.picture}></img> </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <Checkacc>
                        <Link to="/projects">Projetos</Link>
                    </Checkacc>
                    <Check>
                        <Link to="/login">Logar</Link>
                    </Check>
                    <Checkacc>
                        <Link to="/account">Conta</Link>
                    </Checkacc>
                </ul>
            </Container>
        </nav>
    )
}

    
export default Navbar