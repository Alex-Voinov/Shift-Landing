import { FC } from 'react'
import styles from './Logo.module.css'
import LogoSrc from '@/assets/images/svg/logo.svg'
import clsx from 'clsx'


interface ILogo {
    className?: string
    action?: () => void
}


const Logo: FC<ILogo> = ({ className = '', action }) => {
    return (
        <div
            className={clsx(styles.wrapper, className)}
            onClick={action}
        >
            <img src={LogoSrc} alt='Shift' />
        </div>
    )
}

export default Logo