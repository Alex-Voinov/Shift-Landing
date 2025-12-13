import { FC } from 'react';
import styles from './BenefitCard.module.css'
import clsx from 'clsx';
import Lighting from '@/assets/images/svg/lightning.svg'


interface IBenefitCard {
    title: string;
    desc: string;
    isActive: boolean;
}

const BenefitCard: FC<IBenefitCard> = ({
    title,
    desc,
    isActive,
}) => {
    return (
        <div className={clsx(styles.wrapper, isActive && styles.active)}>
            <div className={styles.container}>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            {!isActive && <div className={styles.label}>
                <img src={Lighting} alt="lighting" />
            </div>}
        </div>
    )
}

export default BenefitCard