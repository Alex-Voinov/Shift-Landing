import { FC } from 'react'
import styles from './Promo.module.css'
import { EXTERNAL_LINKS } from '@/config/links'


const Promo: FC = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.textBlock}>
                    <h1 className={styles.title}>Попробуйте SHIFT за 1 ₽ в первый месяц</h1>
                    <p className={styles.desc}>+ Получите инструкцию <br className={styles.mobBreak}/> «Как стабилизировать выход рабочих <br />
                        на свой  обьект, и на что обратить внимание при их назначении»</p>
                    <button
                        className={styles.send}
                        onClick={() => window.open(EXTERNAL_LINKS.request, "_blank")}
                    >
                        Получить доступ за 1 ₽
                    </button>
                </div>
                <button
                    className={styles.send}
                    onClick={() => window.open(EXTERNAL_LINKS.request, "_blank")}
                >
                    Получить доступ за 1 ₽
                </button>
            </div>
        </section>
    )
}

export default Promo