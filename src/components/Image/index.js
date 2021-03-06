import { useState } from 'react'
import styles from './styles.module.scss'

export function Image({ alt, ...props }) {
    const [skeleton, setSkeleton] = useState(true)

    function handleLoad({ target }) {
        setSkeleton(false)
        target.style.opacity = 1
    }

    return (
        <div className={styles.wrapper}>
            {skeleton && <div className={styles.skeleton} />}
            <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
        </div>
    )
}