import { FC } from "react";
import styles from './ProblemCard.module.css'
import Lightning from '@/assets/images/svg/lightning.svg'
import clsx from "clsx";


interface IProblemCard {
    problemText: string;
    key: string;
    className?: string;
}

const ProblemCard: FC<IProblemCard> = ({ problemText, key, className = '' }) => {
    return <div
        key={key}
        className={clsx(styles.wrapper, className)}
    >
        {problemText}
        <div className={styles.label}>
            <img src={Lightning} alt="lightning" />
        </div>
    </div>
}

export default ProblemCard;