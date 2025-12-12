import { FC } from "react";
import Marquee from "react-fast-marquee";
import styles from "./Marquee.module.css";
import personal from '@/config/marqueeWords'

interface MarqueeProps {
    words?: string[];
    speed?: number;
    gap?: number;
}

const MyMarquee: FC<MarqueeProps> = ({ words = personal, speed = 50, gap = 50 }) => {
    return (
        <div className={styles.container}>
            <Marquee speed={speed} gradient={false} pauseOnHover>
                {words.map((word, idx) => (
                    <span
                        key={idx}
                        className={styles.word}
                        style={{ marginRight: `${gap}px` }}
                    >
                        {word}
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default MyMarquee;
