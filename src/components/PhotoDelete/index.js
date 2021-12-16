import { useFetch } from '../../hooks/useFetch'
import { PHOTO_DELETE } from '../../services/api'
import styles from './styles.module.scss'

export function PhotoDelete({ id }) {
    const { loading, request } = useFetch()

    async function handleClickDelete() {
        const confirm = window.confirm('Tem certeza que deseja deletar?')
        if (confirm) {
            const { url, options } = PHOTO_DELETE(id)
            const { response } = await request(url, options)
            if (response.ok) window.location.reload()
        }
    }

    return (
        <>
            {loading
                ? <button className={styles.delete} disabled>
                    Deletar
                </button>
                : <button className={styles.delete} onClick={handleClickDelete}>
                    Deletar
                </button>}

        </>
    )
}