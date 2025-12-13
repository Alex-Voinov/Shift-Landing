import { FC } from "react";
import styles from './ProblemCard.module.css'
import Lightning from '@/assets/images/svg/lightning.svg'
import clsx from "clsx";


interface IProblemCard {
    problemText: string;
    className?: string;
}

const ProblemCard: FC<IProblemCard> = ({ problemText, className = '' }) => {
    return <div
        className={clsx(styles.wrapper, className)}
    >
        {problemText}
        <div className={styles.label}>
            <img src={Lightning} alt="lightning" />
        </div>
    </div>
}

export default ProblemCard;