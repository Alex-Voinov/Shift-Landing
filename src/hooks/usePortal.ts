import { useEffect, useRef } from 'react';

export const usePortal = (id = 'portal-root') => {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let el = document.getElementById(id);
    let created = false;

    if (!el) {
      el = document.createElement('div');
      el.id = id;
      document.body.appendChild(el);
      created = true;
    }

    rootRef.current = el;

    return () => {
      if (created && el?.parentNode) {
        el.parentNode.removeChild(el);
      }
    };
  }, [id]);

  return rootRef.current;
};
