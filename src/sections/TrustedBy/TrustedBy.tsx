import trustPoints from '@/config/trustedBy'
import styles from './TrustedBy.module.css'
import PlaceholderPhoto from '@/assets/images/png/placeholderPhoto.png'
import Slider from '@/components/Slider'
import { forwardRef } from 'react'



const TrustedBy = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section className={styles.wrapper} ref={ref}>
            <main>
                <h1>Кто нам доверяет?</h1>
                {trustPoints.map((data, index) => {
                    const cards = data.src.map((source, phIndex) => <div
                        className={styles.oneCard}
                        key={`tp-${index}-${phIndex}`}
                    >
                        <img
                            src={source ? source : PlaceholderPhoto}
                            alt="co-photo"
                        />
                    </div>)
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