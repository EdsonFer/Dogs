import { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { PHOTO_GET } from '../../services/api'
import { Error } from '../Error'
import { Loading } from '../Loading'
import { PhotoContent } from '../PhotoContent'

import styles from './styles.module.scss'

export function FeedModal({ photo }) {
    const { data, error, loading, request } = useFetch()

    useEffect(() => {
        const { url, options } = PHOTO_GET(photo.id)
        request(url, options)
    }, [photo, request])

    return (
        <div className={styles.modal}>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />}

        </div>
    )
} 