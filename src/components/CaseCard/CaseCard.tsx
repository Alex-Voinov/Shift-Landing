import { FC } from 'react'
import styles from './CaseCard.module.css'


interface ICaseCard {
    title: string;
    result: string;
    url1: string;
    url2: string;
    index: number;
}

const CaseCard: FC<ICaseCard> = ({
    title,
    result,
    url1,
    url2,
    index
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleBlock}>
                <span>Кейс {index + 1}:&nbsp;</span>
                <span>{title}</span>
            </div>
            <div className={styles.gallery}>
                <div className={styles.imgWrapper}>
                    <img
                        src={`${import.meta.env.BASE_URL}cases/${url1}.jpg`}
                        alt={`${title}: img 1`}
                    />
                </div>
                <div className={styles.imgWrapper}>
                    <img
                        src={`${import.meta.env.BASE_URL}cases/${url2}.jpg`}
                        alt={`${title}: img 2`}
                    />
                </div>
            </div>
            <div className={styles.resultBlock}>
                <span>Результат:&nbsp;</span>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default CaseCard