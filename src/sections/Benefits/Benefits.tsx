import benefits from '@/config/benefitsText'
import styles from './Benefits.module.css'
import BenefitCard from '@/components/BenefitCard'
import Slider from '@/components/Slider'

const cards = benefits.map(
    (data, index) => <BenefitCard
        title={data.title}
        desc={data.desc}
        isActive={index === 0}
        key={`benefit-card-${index}`}
    />
)

const Benefits = () => {
    return (
        <section className={styles.wrapper}>
            <main>
                {cards}
            </main>
            <div className={styles.sliiderWrapper}>
                <Slider
                    items={[...cards, <div />]}
                    columns={2}
                    rows={1}
                    colGap={10}
                    className={styles.slider}
                />
            </div>

        </section>
    )
}

export default Benefits