import { useEffect, useRef, useState } from 'react';

const useActiveSection = (count: number) => {
  const [active, setActive] = useState(0);
  const refs = useRef<HTMLElement[]>(Array(count).fill(null));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = refs.current.indexOf(entry.target as HTMLElement);
          if (entry.isIntersecting && idx !== -1) {
            setActive(idx);
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return { active, refs };
};


export default useActiveSection;