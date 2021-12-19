import { useState } from "react";
import { FeedModal } from "../../components/FeedModal";
import { FeedPhotos } from "../../components/FeedPhotos";

export function Feed({ user }) {
    const [modalPhoto, setModalPhoto] = useState(null)

    return (
        <section className="container">
            {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
            <FeedPhotos user={user} setModalPhoto={setModalPhoto} />
        </section>
    )
} 