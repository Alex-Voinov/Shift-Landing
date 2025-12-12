import { forwardRef } from 'react'
import styles from './Preview.module.css'

const descPoints = [
    'без публикации вакансий, модерации и платы за нее и усиления на сайтах объявлений;',
    'без надежды на «выйдут - не выйдут» в разных чатах;',
    'без собеседований 100 человек чтобы вышли 5;',
    'без боли - сказали выйдут 10, а вышли 3.',
]


const Preview = forwardRef<HTMLElement>((_, ref) => {
    return (
        <section ref={ref} className={styles.wrapper}>
            <main>
                <h1>Соберите рабочий персонал</h1>
                <h1>на ваш объект на завтра</h1>
                <h1>за 10 минут</h1>
                <div className={styles.descBlock}>
                    {descPoints.map((text, index) => <div
                        key={`desc-point-${index}`}
                    >
                        <div className={styles.point} />
                        <span>{text}</span>
                    </div>)}
                </div>
            </main>
            <div className={styles.back} />
        </section>
    )
})

export default Preview