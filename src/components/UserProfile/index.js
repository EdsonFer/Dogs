import { useParams } from "react-router-dom"
import { Feed } from "../../pages/Feed"
import { Head } from "../Head"

export function UserProfile() {
    const { user } = useParams()
    return (
        <section className="container mainSection">
            <Head title={user} />
            <h1 className="title">{user}</h1>
            <Feed user={user} />
        </section>
    )
}
