import { useState } from "react";
import { FeedModal } from "../../components/FeedModal";
import { FeedPhotos } from "../../components/FeedPhotos";

export function Feed() {
    const [modalPhoto, setModalPhoto] = useState(null)

    return (
        <section className="container">
            {modalPhoto && <FeedModal photo={modalPhoto} />}
            <FeedPhotos setModalPhoto={setModalPhoto} />
        </section>
    )
}