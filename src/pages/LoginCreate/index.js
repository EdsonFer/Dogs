import { useContext } from 'react';
import { UserStorageContext } from "../../contexts/UserContext";
import { USER_POST } from '../../services/api';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Error } from '../../components/Error';
import { useForm } from '../../hooks/useForm'
import { useFetch } from '../../hooks/useFetch';

export function LoginCreate() {
    const username = useForm()
    const email = useForm('email')
    const password = useForm()

    const { loading, error, request } = useFetch()

    const { userLogin } = useContext(UserStorageContext)

    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value
        })
        const { response } = await request(url, options)
        if (response.ok) {
            userLogin(username.value, password.value)
        }
    }

    return (
        <section className="animeLeft">
            <h1 className="title">Cadastre-se</h1>

            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Email" type="text" name="email" {...email} />
                <Input label="Password" type="text" name="password" {...password} />
                {loading ?
                    <Button disabled >Cadastrando</Button>
                    :
                    <Button >Cadastrar</Button>
                }
                <Error error={error} />

            </form>
        </section>
    )
}