import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { UserHeaderNav } from '../UserHeaderNav'

import styles from './styles.module.scss'

export function UserHeader() {
    const [title, setTitle] = useState('')
    const location = useLocation()

    useEffect(() => {
        const { pathname } = location
        switch (pathname) {
            case '/conta/postar':
                setTitle('Poste Sua Foto')
                break;

            case '/conta/estatisticas':
                setTitle('Estatisticas')
                break;

            default:
                setTitle('Minha Conta')
                break;
        }
    }, [location])

    return (
        <header className={styles.header}>
            <h1 className="title">Título</h1>
            <UserHeaderNav />
        </header>
    )
}