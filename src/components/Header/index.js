import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserStorageContext } from '../../contexts/UserContext';

import { ReactComponent as Dogs } from '../../assets/dogs.svg'
import styles from './styles.module.scss';


export function Header() {
    const { data } = useContext(UserStorageContext)

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/" aria-label="Dogs - Home">
                    <Dogs />
                </Link>
                {data ?
                    <Link className={styles.login} to="/conta">
                        {data.nome}
                    </Link>
                    :
                    <Link className={styles.login} to="/login">
                        Login/Criar
                    </Link>}

            </nav>
        </header >
    )
}