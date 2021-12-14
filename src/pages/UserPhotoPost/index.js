import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { PHOTO_POST } from "../../services/api";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Error } from "../../components/Error"
import { useForm } from '../../hooks/useForm'
import { useFetch } from '../../hooks/useFetch'

import styles from './styles.module.scss'

export function UserPhotoPost() {
    const nome = useForm()
    const peso = useForm('number')
    const idade = useForm('number')
    const [img, setImg] = useState({})

    const { data, error, loading, request } = useFetch()

    const navigate = useNavigate()

    useEffect(() => {
        if (data) navigate('/conta')
    }, [data, navigate])

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData()
        formData.append('img', img.raw)
        formData.append('nome', nome.value)
        formData.append('peso', peso.value)
        formData.append('idade', idade.value)

        const token = window.localStorage.getItem('token')
        const { url, options } = PHOTO_POST(formData, token)
        request(url, options)
    }

    function handleImgChange({ target }) {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],

        })
    }

    return (
        <section className={`${styles.photoPost} animeLeft`}>
            <form onSubmit={handleSubmit}>
                <Input label="Nome" type="text" name="nome" {...nome} />
                <Input label="Peso" type="number" name="peso" {...peso} />
                <Input label="Idade" type="number" name="idade" {...idade} />
                <input
                    type="file"
                    name="img"
                    id="img"
                    className={styles.file}
                    onChange={handleImgChange}
                />
                {loading ? <Button disabled>Enviando...</Button>
                    :
                    <Button>Enviar</Button>
                }
                <Error error={error} />
            </form>
            <div>
                {img.preview &&
                    <div className={styles.preview} style={{ backgroundImage: `url('${img.preview}')` }}>
                    </div>}
            </div>
        </section>
    )
}