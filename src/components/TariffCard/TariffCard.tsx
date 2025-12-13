import { FC } from 'react'
import styles from './TariffCard.module.css'
import clsx from 'clsx';


interface ITariffCard {
    title: string;
    subTitle: string;
    url: string;
    isActive: boolean;
    points: string[];
}

const TariffCard: FC<ITariffCard> = ({
    title,
    subTitle,
    url,
    isActive,
    points
}) => {
    return (
        <div className={clsx(styles.wrapper, isActive && styles.active)}>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <ul>
                {points.map((text, index) => <li
                    key={`tarif-point-${index}`}
                >
                    {text}
                </li>
                )}
            </ul>
            <button
                onClick={() => window.open(
                    url, "_blank")
                }
            >
                Приобрести тариф
            </button>
        </div>
    )
}

export default TariffCard