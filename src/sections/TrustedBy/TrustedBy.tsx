import trustPoints from '@/config/trustedBy'
import styles from './TrustedBy.module.css'
import Slider from '@/components/Slider'
import { forwardRef } from 'react'
import TrustedCard from '@/components/TrustedCard'


const TrustedBy = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section className={styles.wrapper} ref={ref}>
            <main>
                <h1>Кто нам доверяет?</h1>
                {trustPoints.map((data, index) => {
                    const imageUrl = []
                    for (let i = 1; i <= 5; i++) imageUrl.push(`${import.meta.env.BASE_URL}${data.srcFolder}/${i}.png`)
                    const cards = imageUrl.map((source, phIndex) => <TrustedCard
                        index={index}
                        phIndex={phIndex}
                        source={source}
                    />)
                    return <div
                        className={styles.record}
                        key={`trust-point-${index}`}
                    >
                        <h2>{data.title}</h2>
                        <div className={styles.pointGallery}>
                            {cards}
                        </div>
                        <div className={styles.sliderWrapper}>
                            <Slider
                                items={[...cards, <div />]}
                                columns={3}
                                rows={1}
                                colGap={10}
                                className={styles.slider}
                            />
                        </div>
                    </div>
                })}
            </main>
        </section>
    )
})

export default TrustedBy