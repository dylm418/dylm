import { useState, useRef, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';

function Learnof() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const intervalRef = useRef(null);

  const shuffleItems = () => {
    setItems((prevItems) =>
      prevItems.sort(() => Math.random() - 0.5)
    );
  };

  const transitions = useTransition(items, {
    from: { opacity: 0, y: -50 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 50 },
    trail: 50,
  });

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      shuffleItems();
    }, 2000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      {transitions((style, item) => (
        <animated.div style={style}>{item}</animated.div>
      ))}
    </div>
  );
}

export default Learnof;
