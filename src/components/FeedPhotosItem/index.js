import styles from './styles.module.scss'

export function FeedPhotosItem({ photo, setModalPhoto }) {
    function handleClick() {
        setModalPhoto(photo)
    }

    return (
        <li className={styles.photo} onClick={handleClick}>
            <img src={photo.src} alt={photo.title} />
            <span className={styles.visualizacao}>{photo.acessos}</span>
        </li>
    )
}