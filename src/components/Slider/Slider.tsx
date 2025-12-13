import { FC, ReactNode, useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperInstance } from 'swiper'
import { A11y } from 'swiper/modules'
import styles from './Slider.module.css'
import 'swiper/css'
import chunk from '@/utilites/chunk'
import clsx from 'clsx'

interface SliderProps {
    items: ReactNode[]

    columns: number
    rows: number

    colGap?: number
    rowGap?: number

    /** стили одного пункта */
    dotStyle?: string
    activeDotStyle?: string
    /** gap между слайдером и навигацией */
    navTopOffset?: number

    /** gap между пунктами */
    navGap?: number

    className?: string
}

const Slider: FC<SliderProps> = ({
    items,
    columns,
    rows,
    colGap = 16,
    rowGap = 16,
    dotStyle,
    navTopOffset = 10,
    navGap = 8,
    className,
    activeDotStyle,
}) => {
    const slides = useMemo(
        () => chunk(items, rows),
        [items, rows]
    )

    const [swiper, setSwiper] = useState<SwiperInstance | null>(null)
    const [active, setActive] = useState(0)

    if (!slides.length) return null

    return (
        <div className={`${styles.wrapper} ${className ?? ''}`}>
            <Swiper
                modules={[A11y]}
                slidesPerView={columns}
                spaceBetween={colGap}
                onSwiper={setSwiper}
                onSlideChange={(s) => setActive(s.activeIndex)}
                className={styles.slider}
            >
                {slides.map((columnItems, colIndex) => (
                    <SwiperSlide key={colIndex} className={styles.slide}>
                        <div
                            className={styles.column}
                            style={{ gap: rowGap }}
                        >
                            {columnItems.map((item, rowIndex) => (
                                <div key={rowIndex} className={styles.item}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div
                className={styles.nav}
                style={{ marginTop: navTopOffset, gap: navGap }}
            >
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={clsx(styles.dot, dotStyle, index == active && activeDotStyle)}
                        onClick={() => swiper?.slideTo(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider;