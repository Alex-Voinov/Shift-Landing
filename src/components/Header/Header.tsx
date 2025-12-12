import { FC } from 'react';
import styles from './Header.module.css'
import clsx from 'clsx'
import Burger from '@/assets/images/svg/burger.svg'


interface IHeader {
    activeSection: number;
    onClickSection?: (idx: number) => void;
}

const menuPoints = [
    'О нас',
    'Клиенты',
    'Кейсы',
    'Отзывы',
    'Спецпредложение',
    'Тарифы',
]

const Header: FC<IHeader> = ({ activeSection, onClickSection }) => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logo}>

                </div>
                <div className={styles.menu}>
                    {menuPoints.map((text, index) => <p
                        key={`header-menu-point-${index}`}
                        className={clsx(activeSection === index && styles.active)}
                        onClick={() => onClickSection?.(index)}
                    >
                        {text}
                    </p>)}
                </div>
                <div className={styles.logo}>

                </div>
            </div>
            <img className={styles.burger} src={Burger} alt="menu" />
        </header>
    )
}

export default Header