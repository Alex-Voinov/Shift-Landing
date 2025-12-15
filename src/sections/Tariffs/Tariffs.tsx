import Slider from '@/components/Slider'
import styles from './Tariffs.module.css'
import tariffs from '@/config/tariffs'
import TariffCard from '@/components/TariffCard'
import { forwardRef } from 'react'


const cards = tariffs.map(
    (data, index) => <TariffCard
        title={data.title}
        subTitle={data.subtitle}
        url={data.url}
        isActive={index === 0}
        points={data.points}
        key={`benefit-card-${index}`}
    />
)

const Tariffs = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section className={styles.wrapper} ref={ref}>
            <main>
                <h1>Тарифы</h1>
                <div className={styles.container}>
                    {cards}
                </div>
                <div className={styles.sliiderWrapper}>
                    <Slider
                        items={[...cards, <div />]}
                        columns={2}
                        rows={1}
                        colGap={10}
                        className={styles.slider}
                    />
                </div>
            </main>
        </section>
    )
})

export default Tariffs





