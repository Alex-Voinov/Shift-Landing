import { useEffect, useRef, useState } from 'react';

const useActiveSection = (count: number) => {
  const [active, setActive] = useState(0);
  const refs = useRef<HTMLElement[]>(Array(count).fill(null));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Считаем, какая секция сейчас максимально видима
      let maxRatio = 0;
      let maxIndex = active;

      entries.forEach((entry) => {
        const idx = refs.current.indexOf(entry.target as HTMLElement);
        if (idx === -1) return;

        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          maxIndex = idx;
        }
      });

      setActive(maxIndex);
    }, {
      threshold: Array.from({ length: 20 }, (_, i) => i / 20)   // много порогов = стабильнее
    });

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [active]);


  return { active, refs };
};


export default useActiveSection;