import { FC, useState } from 'react';
import styles from './Header.module.css'
import clsx from 'clsx'
import Burger from '@/assets/images/svg/burger.svg'
import BurgerMenu from '../BurgerMenu';
import Logo from '@/components/Logo';


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

    const [open, setOpen] = useState(false);

    const scrollToTop = () => {
        setOpen(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const logo = <Logo className={styles.logo} action={scrollToTop} />

    const menu = <div className={styles.menu}>
        {menuPoints.map((text, index) => <p
            key={`header-menu-point-${index}`}
            className={clsx(activeSection === index && styles.active)}
            onClick={() => {
                open && setOpen(false)
                onClickSection?.(index)
            }}
        >
            {text}
        </p>)} </div>

    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                {logo}
                {menu}
            </div>
            <img onClick={() => setOpen(true)} className={styles.burger} src={Burger} alt="menu" />
            <BurgerMenu open={open} onClose={() => setOpen(false)}>
                <div className={styles.menuContainer}>
                    {logo}
                    {menu}
                </div>
            </BurgerMenu>
        </header>
    )
}

export default Header