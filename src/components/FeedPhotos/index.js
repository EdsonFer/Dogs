import { useEffect } from "react";
import { PHOTOS_GET } from "../../services/api";

import { Error } from '../Error'
import { FeedPhotosItem } from "../FeedPhotosItem";
import { useFetch } from '../../hooks/useFetch'
import { Loading } from "../Loading";

import styles from './styles.module.scss';

export function FeedPhotos({ user, setModalPhoto }) {
    const { data, loading, error, request } = useFetch()

    useEffect(() => {
        async function fetchPhotos() {
            const { url, options } = PHOTOS_GET({ page: 1, total: 3, user })
            const { json } = await request(url, options)
        }
        fetchPhotos()
    }, [request, user])

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (data)
        return (
            <ul className={`${styles.feed} animeLeft`}>
                {data.map(photo =>
                    <FeedPhotosItem
                        key={photo.id}
                        photo={photo}
                        setModalPhoto={setModalPhoto}
                    />)}
            </ul>
        )
    else return null
}