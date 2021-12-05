import styles from './styles.module.scss'

export function Input({ label, type, name, value, onChange, error, onBlur }) {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input
                className={styles.input}
                id={name}
                name={name}
                type={type}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
            />
            {error && <p className={styles.error}>{error}</p>}
        </div >
    )
}