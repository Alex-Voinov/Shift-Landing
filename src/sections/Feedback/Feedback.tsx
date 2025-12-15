import { FC, forwardRef } from 'react'
import styles from './Feedback.module.css'
import feedbacks from '@/config/feedback'
import FeedbackCard from '@/components/FeedbackCard'


const Feedback: FC = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section className={styles.wrapper} ref={ref}>
            <main>
                {feedbacks.map((
                    data,
                    index
                ) => <FeedbackCard
                        {...data}
                        key={index}
                    />)}
            </main>
        </section>
    )
})

export default Feedback