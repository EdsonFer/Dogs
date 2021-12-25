import styles from './styles.module.scss';
import { ReactComponent as Dogs } from '../../assets/dogs-footer.svg'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <Dogs />
            <p>Dogs. Alguns direitos reservados.</p>
        </footer>
    )
}