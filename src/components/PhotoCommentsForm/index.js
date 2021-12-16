import { useState } from "react"
import { ReactComponent as Enviar } from "../../assets/enviar.svg"
import { useFetch } from "../../hooks/useFetch"
import { COMMENT_POST } from "../../services/api"
import { Error } from "../Error"

import styles from './styles.module.scss'

export function PhotoCommentsForm({ id, setComments }) {
    const { request, error } = useFetch()
    const [comment, setComment] = useState('')


    async function handleSubmit(event) {
        event.preventDefault()

        const { url, options } = COMMENT_POST(id, { comment })
        const { response, json } = await request(url, options)
        console.log(json)
        if (response.ok) {
            setComment('')
            setComments((comments) => [...comments, json])
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <textarea
                className={styles.textarea}
                id="comment"
                name="comment"
                placeholder="Comente..."
                value={comment}
                onChange={({ target }) => setComment(target.value)} />

            <button className={styles.button}>
                <Enviar />
            </button>
            <Error error={error} />
        </form>
    )
}