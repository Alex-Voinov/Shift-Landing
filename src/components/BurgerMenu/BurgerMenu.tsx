import { createPortal } from 'react-dom';
import { FC, useEffect } from 'react';
import styles from './BurgerMenu.module.css'


interface IBurgerMenu {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const BurgerMenu: FC<IBurgerMenu> = ({ open, onClose, children }) => {
    const portalRoot = document.getElementById('portal-root');

    useEffect(() => {
        if (!open) return;

        const onEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', onEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onEsc);
            document.body.style.overflow = '';
        };
    }, [open, onClose]);

    if (!open || !portalRoot) return null;

    return createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <nav
                className={styles.menu}
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </nav>
        </div>,
        portalRoot
    );
};

export default BurgerMenu;