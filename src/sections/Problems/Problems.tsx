import styles from './Problems.module.css'
import problems from '@/config/problemsText'
import ProblemCard from '@/components/ProblemCard/ProblemCard'
import Slider from '@/components/Slider'

const cards = problems.map(
    (problemText, index) => <ProblemCard
        problemText={problemText}
        key={`problem-card-${index}`}
        className={index === problems.length - 1 ? styles.activeCard : styles.defaultCard}
    />
)

const Problems = () => {
    return (
        <section className={styles.wrapper}>
            <main>
                <h1>Проблемы,</h1>
                <h2>которые мы поможем решить</h2>
                <div className={styles.container}>
                    {cards}
                </div>
                <Slider
                    items={cards}
                    columns={1}
                    rows={3}
                    rowGap={10}
                    dotStyle={styles.sliderPoints}
                    activeDotStyle={styles.activePoint}
                    className={styles.slider}
                />
            </main>
        </section>
    )
}

export default Problems