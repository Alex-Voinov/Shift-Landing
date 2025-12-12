import { FC } from "react";
import styles from './ProblemCard.module.css'
import Lightning from '@/assets/images/svg/lightning.svg'


interface IProblemCard {
    problemText: string;
    key: string;
}

const ProblemCard: FC<IProblemCard> = ({ problemText, key }) => {
    return <div
        key={key}
        className={styles.wrapper}
    >
        {problemText}
        <div className={styles.label}>
            <img src={Lightning} alt="lightning" />
        </div>
    </div>
}

export default ProblemCard;