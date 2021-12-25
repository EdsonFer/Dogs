import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Error } from "../../components/Error"
import { useForm } from "../../hooks/useForm"
import { useFetch } from "../../hooks/useFetch"
import { PASSWORD_LOST } from "../../services/api"
import { Head } from "../../components/Head"

export function LoginPasswordLost() {
    const login = useForm()
    const { data, loading, error, request } = useFetch()

    async function handleSubmit(event) {
        event.preventDefault()
        if (login.validate()) {
            const { url, options } = PASSWORD_LOST({
                login: login.value,
                url: window.location.href.replace('perdeu', 'resetar'),
            })
            await request(url, options)
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Perdeu a senha?" />
            <h1 className="title">
                Perdeu a Senha?
            </h1>

            {data ?
                <p style={{ color: "#4c1" }}>{data}</p>
                :
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Email/Usuário"
                        type="text"
                        name="login"
                        {...login}
                    />
                    {loading ?
                        <Button disabled>Enviando</Button>
                        :
                        <Button>Enviar Email</Button>
                    }

                </form>
            }

            <Error error={error} />
        </section>
    )
}