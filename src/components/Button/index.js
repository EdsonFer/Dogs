import styles from './styles.module.scss'

export function Button({ children, ...props }) {
    return <button {...props} className={styles.button}>{children}</button>
}