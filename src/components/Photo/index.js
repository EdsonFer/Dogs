import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { PHOTO_GET } from "../../services/api"
import { Error } from "../Error"
import { Loading } from "../Loading"
import { PhotoContent } from "../PhotoContent"

export function Photo() {
    const { id } = useParams()
    const { data, loading, error, request } = useFetch()

    useEffect(() => {
        const { url, options } = PHOTO_GET(id)
        request(url, options)

    }, [id, request])

    if (error) return <Error error={error} />
    if (loading) return <Loading loading={loading} />
    if (data) {
        return (
            <section className="container mainContainer">
                <PhotoContent data={data} single={true} />
            </section>
        )
    } else return null
}