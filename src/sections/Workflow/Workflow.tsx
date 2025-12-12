import { forwardRef } from "react"
import styles from './Workflow.module.css'


const Workflow = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} className={styles.wrapper}>
            Workflow
        </section>
    )
})

export default Workflow