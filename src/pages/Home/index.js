import { Head } from '../../components/Head'
import { Feed } from '../../pages/Feed'


export function Home() {
    return (
        <section className="container mainContainer">
            <Head title="Fotos" description="Home do site dogs, com o feed de fotos" />
            <Feed />
        </section>
    )
}
