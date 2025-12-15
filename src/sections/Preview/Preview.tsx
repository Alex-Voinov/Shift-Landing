import styles from './Preview.module.css'
import { EXTERNAL_LINKS } from '@/config/links'
import Lightning from '@/assets/images/svg/lightning.svg'

const descPoints = [
    'без публикации вакансий, модерации и платы за нее и усиления на сайтах объявлений;',
    'без надежды на «выйдут - не выйдут» в разных чатах;',
    'без собеседований 100 человек чтобы вышли 5;',
    'без боли - сказали выйдут 10, а вышли 3.',
]


const Preview = () => {
    return (
        <section className={styles.wrapper}>
            <main>
                <h1>
                    <span className={styles.fullText}>Соберите рабочий персонал</span>
                    <span className={styles.shortText}>Рабочий персонал</span>  
                </h1>
                <h1>
                    <span className={styles.fullText}>на ваш объект на завтра</span> 
                    <span className={styles.shortText}>на завтра</span>    
                </h1>
                <h1>за 10 минут</h1>
                <div className={styles.descBlock}>
                    {descPoints.map((text, index) => <div
                        key={`desc-point-${index}`}
                    >
                        <div className={styles.point} />
                        <span>{text}</span>
                    </div>)}
                </div>
                <button
                    onClick={() => window.open(EXTERNAL_LINKS.request, "_blank")}
                    className={styles.send}
                >
                    Попробовать за 1 ₽&nbsp;<span>первый месяц</span> 
                </button>
            </main>
            <div className={styles.back} />
            <div className={styles.signature}>
                Самая большая база рабочих рук с рейтингом в городе.
            </div>
            <div className={styles.whyBlockContainer}>
                <div className={styles.whyBlock}>
                    <div className={styles.whyWe}>
                        Почему мы?
                    </div>
                    <div className={styles.indicators}>
                        Показатели
                    </div>
                    <div className={styles.stats}>
                        <span>1400+</span> <span>довольных клиентов</span>
                    </div>
                    <div className={styles.label}>
                        <img src={Lightning} alt="lightning" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Preview