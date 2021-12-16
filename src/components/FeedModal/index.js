import { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { PHOTO_GET } from '../../services/api'
import { Error } from '../Error'
import { Loading } from '../Loading'
import { PhotoContent } from '../PhotoContent'

import styles from './styles.module.scss'

export function FeedModal({ photo, setModalPhoto }) {
    const { data, error, loading, request } = useFetch()

    useEffect(() => {
        const { url, options } = PHOTO_GET(photo.id)
        request(url, options)
    }, [photo, request])

    function handleOutsideClick(event) {
        if (event.target === event.currentTarget) {
            setModalPhoto(null)
        }

    }

    return (
        <div className={styles.modal} onClick={handleOutsideClick}>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />}

        </div>
    )
} 