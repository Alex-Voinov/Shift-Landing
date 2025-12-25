import { useState } from 'react';
import styles from './Form.module.css'
import Select from '@/assets/images/svg/select.svg'
import clsx from 'clsx';
import { FORM_LINKS } from '@/config/links';


const Form = () => {
    const [select, setSelect] = useState(false);
    return (
        <section className={styles.wrapper}>
            <main>
                <div className={styles.textBlock}>
                    <h1>Нужна консультация?</h1>
                    <p>Оставьте заявку — расскажем <br />
                        о возможностях для крупных объёмов.</p>
                </div>
                <form className={styles.formBLock}>
                    {/* <p>Имя</p>
                    <input type="text" placeholder='Алексей' />
                    <p>Телефон</p>
                    <input type="tel" placeholder='+7(999)000-00-00' />
                    <p>Сообщение</p>
                    <textarea placeholder='Мне нужна помощь' />
                    <div className={styles.checkBlock} onClick={() => setSelect(!select)}>
                        <div className={clsx(styles.chekbox, select && styles.select)}>
                            <img src={Select} alt="select" />
                        </div>
                        <p>Согласен на обработку</p>
                    </div> */}
                    <button
                        onClick={() => window.open(FORM_LINKS.request, "_blank")}
                    >
                        Отправить заявку
                    </button>
                </form>
            </main>
        </section>
    )
}

export default Form