import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserStorageContext } from "../../contexts/UserContext";

import { ReactComponent as MinhasFotos } from '../../assets/feed.svg'
import { ReactComponent as Estatisticas } from '../../assets/estatisticas.svg'
import { ReactComponent as AdicionarFoto } from '../../assets/adicionar.svg'
import { ReactComponent as Sair } from '../../assets/sair.svg'

import styles from './styles.module.scss'

export function UserHeaderNav() {
    const [mobile, setMobile] = useState(null)
    const { userLogout } = useContext(UserStorageContext)

    return (
        <nav className={styles.nav}>
            <NavLink to="/conta" end
            >
                <MinhasFotos />
                {mobile && "Minhas Fotos"}
            </NavLink>

            <NavLink to="/conta/estatisticas">
                <Estatisticas />
                {mobile && "Estatisticas"}
            </NavLink>

            <NavLink to="/conta/postar">
                <AdicionarFoto />
                {mobile && "Adicionar Foto"}
            </NavLink>

            <button onClick={userLogout}>
                <Sair />
                {mobile && "Sair"}
            </button>
        </nav>
    )
}