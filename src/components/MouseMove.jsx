import React, { useEffect } from 'react';
import styles from '../style.module.scss';

const MouseMove = () => {
  useEffect(() => {
    const container = document.getElementById(styles.container);
    const cursor = document.getElementById(styles.cursor);

    for (let i = 0; i < 350; i++) {
      let box = document.createElement('span');
      container.appendChild(box);
    }

    const handleMouseMove = (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div  id={styles.container}></div>
      <div id={styles.cursor}></div>
    </div>
  );
};

export default MouseMove;