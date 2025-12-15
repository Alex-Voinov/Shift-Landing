import { FC, forwardRef } from 'react'
import styles from './Cases.module.css'


const Cases: FC = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section className={styles.wrapper} ref={ref}>
            Cases
        </section>
    )
})

export default Cases