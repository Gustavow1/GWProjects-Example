import styles from './Account.module.css'

import { BsFillArchiveFill, BsBookmarkHeart, BsFillPiggyBankFill, BsCashStack, BsCollection } from "react-icons/bs";



function Account() {
    const user = localStorage.getItem('username')

    
    return (
        <div className={styles.div_principal} >
            <div className={styles.div_menu}>
                <h1>GWProjects</h1>
                <a href='/projects'> <BsCollection/> Projetos</a>
                <a href='/projects'> <BsFillPiggyBankFill/> Total investido</a>
                <a href='/projects' className={styles.buttonspace}> <BsCashStack/> Custos Totais</a>
                <a href='/projects'> <BsBookmarkHeart/> Favoritados</a>
                <a href='/projects'> <BsFillArchiveFill/> Arquivados</a>
            </div>    
            <div className={styles.div_dashboard}>
                <p>Bem vindo {user ? user : ''}!</p>
            </div>
        </div>
    ) 
}

export default Account