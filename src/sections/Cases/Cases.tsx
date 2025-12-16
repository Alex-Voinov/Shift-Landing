import { FC, forwardRef } from 'react'
import styles from './Cases.module.css'
import casesData from '@/config/cases'
import CaseCard from '@/components/CaseCard'


const Cases: FC = forwardRef<HTMLDivElement>((_, ref) => {
    const cases = casesData.map((data, index) => <CaseCard
        {...data}
        index={index}
        key={index}
    />)
    return (
        <section className={styles.wrapper} ref={ref}>
            <main>
                <h1 className={styles.title}>Кейсы</h1>
                {cases}
            </main>
        </section>
    )
})

export default Cases