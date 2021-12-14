import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router'
import { UserStorageContext } from "../../contexts/UserContext";

import { ReactComponent as MinhasFotos } from '../../assets/feed.svg'
import { ReactComponent as Estatisticas } from '../../assets/estatisticas.svg'
import { ReactComponent as AdicionarFoto } from '../../assets/adicionar.svg'
import { ReactComponent as Sair } from '../../assets/sair.svg'
import { useMedia } from "../../hooks/useMedia";

import styles from './styles.module.scss'

export function UserHeaderNav() {
    const { userLogout } = useContext(UserStorageContext)
    const mobile = useMedia('(max-width: 40rem)')
    const [mobileMenu, setMobileMenu] = useState(false)

    const { pathname } = useLocation()
    useEffect(() => {
        setMobileMenu(false)
    }, [pathname])

    return (
        <>
            {mobile &&
                <button
                    aria-label="Menu"
                    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
                    onClick={() => setMobileMenu(!mobileMenu)}
                />
            }

            <nav
                className={`
            ${mobile ? styles.navMobile : styles.nav} 
            ${mobileMenu && styles.navMobileActive}`}
            >
                <NavLink to="/conta" end>
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
        </>
    )
}