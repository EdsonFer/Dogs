import { Navigate, Route, Routes } from 'react-router';
import { useContext } from 'react';

import { UserStorageContext } from "../../contexts/UserContext";

import { LoginForm } from '../LoginForm';
import { LoginCreate } from '../LoginCreate';
import { LoginPasswordLost } from '../LoginPasswordLost';
import { LoginPasswordReset } from '../LoginPasswordReset';

import styles from './styles.module.scss';
import { NotFound } from '../../components/NotFound';

export function Login() {
    const { login } = useContext(UserStorageContext)

    if (login === true) return <Navigate to="/conta" />
    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/criar" element={<LoginCreate />} />
                    <Route path="/perdeu" element={<LoginPasswordLost />} />
                    <Route path="/resetar" element={<LoginPasswordReset />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </section>
    )
}
