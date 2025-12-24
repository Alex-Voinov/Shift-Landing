import { FC, useState } from 'react'
import styles from './TrustedCard.module.css'
import PlaceholderPhoto from '@/assets/images/png/placeholderPhoto.png'


interface ITrustedCard {
    index: number
    phIndex: number
    source: string
}

const TrustedCard: FC<ITrustedCard> = ({
    index,
    phIndex,
    source,
}) => {
    const [isError, setError] = useState(false);
    if (isError) return <div className={styles.placeholder}/>;
    return (
        <div
            className={styles.wrapper}
            key={`tp-${index}-${phIndex}`}
        >
            <img
                src={source ? source : PlaceholderPhoto}
                onError={() => setError(true)}
                alt="co-photo"
            />
        </div>
    )
}

export default TrustedCard