import { forwardRef } from 'react'
import styles from './Problems.module.css'
import problems from '@/config/problemsText'
import ProblemCard from '@/components/ProblemCard/ProblemCard'


const Problems = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} className={styles.wrapper}>
            <main>
                <h1>Проблемы,</h1>
                <h2>которые мы поможем решить</h2>
                <div className={styles.container}>
                    {problems.map(
                        (problemText, index) => <ProblemCard
                            problemText={problemText}
                            key={`problem-card-${index}`}
                        />
                    )}
                </div>
            </main>
        </section>
    )
})

export default Problems