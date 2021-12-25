import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserStorageContext } from "../../contexts/UserContext";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Error } from "../../components/Error"
import { useForm } from '../../hooks/useForm'

import styles from './styles.module.scss';
import { Head } from "../../components/Head";

export const LoginForm = () => {
    const username = useForm()
    const password = useForm()

    const { userLogin, error, loading } = useContext(UserStorageContext)

    async function handleSubmit(event) {
        event.preventDefault()

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value)
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Login" />
            <h1 className="title">Login</h1>

            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password} />
                {loading ?
                    <Button disabled>Carregando...</Button>
                    :
                    <Button>Entrar</Button>
                }
                <Error error={error && 'Dados incorretos.'} />
            </form>

            <Link className={styles.perdeu} to="/login/perdeu">Perdeu a senha?</Link>

            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui uma conta? Cadastre no site.</p>
                <Link className={styles.button} to="/login/criar">Cadastro</Link>
            </div>


        </section>
    )
}