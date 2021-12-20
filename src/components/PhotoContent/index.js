import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserStorageContext } from '../../contexts/UserContext'
import { Image } from '../Image'
import { PhotoComments } from '../PhotoComments'
import { PhotoDelete } from '../PhotoDelete'
import styles from './styles.module.scss'

export function PhotoContent({ data, single }) {
    const user = useContext(UserStorageContext)
    const { photo, comments } = data

    return (
        <div className={`${styles.photo} ${single ? styles.single : ''}`}>
            <div className={styles.img}>
                <Image src={photo.src} alt={photo.title} />
            </div>
            <div className={styles.details}>
                <div>
                    <p className={styles.author}>
                        {user.data && user.data.username === photo.author
                            ? <PhotoDelete id={photo.id} />
                            : <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
                        }
                        <span className={styles.visualizacoes}>{photo.acessos}</span>
                    </p>
                    <h1 className={styles.title}>
                        <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                    </h1>
                    <ul className={styles.atributes}>
                        <li>{photo.peso} kg</li>
                        <li>{photo.idade}anos</li>
                        <li>{photo.peso}</li>
                    </ul>
                </div>
            </div>
            <PhotoComments id={photo.id} comments={comments} single={single} />
        </div>
    )
}