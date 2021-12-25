import { useEffect, useState } from "react";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Error } from "../../components/Error"
import { useForm } from "../../hooks/useForm"
import { useFetch } from "../../hooks/useFetch"
import { PASSWORD_RESET } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Head } from "../../components/Head";


export function LoginPasswordReset() {
    const [login, setLogin] = useState('')
    const [key, setKey] = useState('')
    const password = useForm('')
    const { error, loading, request } = useFetch()
    const navigate = useNavigate()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const key = params.get('key')
        const login = params.get('login')
        if (key) setKey(key)
        if (login) setLogin(login)
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        if (password.validate()) {
            const { url, options } = PASSWORD_RESET({
                login,
                key,
                password: password.value
            })
            const { response } = await request(url, options)
            if (response.ok) navigate('/login')
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Resete a senha" />
            <h1 className="title">Resete a Senha</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Nova senha" type="password" name="password" {...password} />
                {loading ?
                    <Button disabled>Resetando...</Button>
                    :
                    <Button>Resetar</Button>
                }
            </form>
            <Error error={error} />
        </section>
    );
}