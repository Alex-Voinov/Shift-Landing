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
                <img src={url1} alt={`${title}: img 1`} />
                <img src={url2} alt={`${title}: img 2`} />
            </div>
            <div className={styles.resultBlock}>
                <span>Результат:&nbsp;</span>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default CaseCard