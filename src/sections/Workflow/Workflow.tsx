import styles from './Workflow.module.css'
import workflow from '@/assets/images/png/workflow.png'
import steps from "@/config/workflowText"
import Step1 from '@/assets/images/png/1.png'
import Step2 from '@/assets/images/png/2.png'
import Step3 from '@/assets/images/png/3.png'
import Step4 from '@/assets/images/png/4.png'

const stepImages = [
    Step1,
    Step2,
    Step3,
    Step4,
]


const Workflow = () => {
    return (
        <section  className={styles.wrapper}>
            <main>
                <h1>Как это работает?</h1>
                <p>Наш сервис помогает быстро и просто собрать людей на завтра на ваш объект</p>
                <div>
                    <div className={styles.infoBlock}>
                        {steps.map((data, index) => <div
                            key={`step-${index}`}
                        >
                            <div className={styles.step}>
                                <div className={styles.wrapperNumber}>
                                    <img src={stepImages[index]} alt={`step-number-${index}`} />
                                </div>
                                <div className={styles.textBlock}>
                                    <h1>{data.title}</h1>
                                    <p>{data.desc}</p>
                                </div>
                            </div>
                        </div>)}
                    </div>
                    <img className={styles.previewBlock} src={workflow} alt="workflow preview" />
                </div>
            </main>
        </section>
    )
}

export default Workflow