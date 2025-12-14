import { FC, useState } from 'react'
import styles from './FeedbackCard.module.css'
import clsx from 'clsx';



interface IFeedbackCard {
    surName: string;
    firstName: string;
    date: string;
    rating: number;
    position: string;
    text: string;
}

const FeedbackCard: FC<IFeedbackCard> = ({
    surName,
    firstName,
    date,
    rating,
    position,
    text,
}) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <svg
                key={i}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={clsx(styles.star, i <= rating && styles.active)}
            >
                <path d="M6.48351 0.69121C6.78287 -0.230101 8.08628 -0.2301 8.38563 0.691211L9.4552 3.98301C9.58907 4.39503 9.97303 4.67399 10.4063 4.67399H13.8675C14.8362 4.67399 15.239 5.91361 14.4552 6.48301L11.6551 8.51745C11.3046 8.77209 11.1579 9.22346 11.2918 9.63548L12.3614 12.9273C12.6607 13.8486 11.6062 14.6147 10.8225 14.0453L8.02236 12.0109C7.67187 11.7562 7.19727 11.7562 6.84678 12.0109L4.04662 14.0453C3.2629 14.6147 2.20842 13.8486 2.50777 12.9273L3.57734 9.63548C3.71122 9.22346 3.56456 8.77209 3.21407 8.51745L0.413903 6.48301C-0.369811 5.91361 0.0329652 4.67399 1.00169 4.67399H4.46289C4.89611 4.67399 5.28007 4.39503 5.41394 3.98301L6.48351 0.69121Z" />
            </svg>
        )
    }
    const [show, setShow] = useState(false);
    const words = position.trim().split(/\s+/)
    const firstWord = words[0]
    const restWords = words.slice(1).join(' ')
    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <div className={styles.avatar} />
                <div className={styles.personalBlock}>
                    <h1>{`${firstName} ${surName}`}</h1>
                    <p>{firstWord} <span className={styles.hiddenPartion}>{restWords}</span> </p>
                </div>
                <div className={styles.ratingBlock}>
                    <div className={styles.ratingLine}>
                        {stars}
                    </div>
                    <div className={styles.dateLine}>
                        {date}
                    </div>
                </div>
            </div>
            <div
                className={styles.mainText}
                onClick={() => setShow(!show)}
                style={{
                    WebkitLineClamp: show ? 'unset' : 4,
                }}
            >
                {text}
            </div>
        </div>
    )
}

export default FeedbackCard