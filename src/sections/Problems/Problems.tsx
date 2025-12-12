import { forwardRef } from 'react'
import styles from './Problems.module.css'


const Problems = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} className={styles.wrapper}>
            Problems
        </section>
    )
})

export default Problems