import React, { useState } from 'react';
import { useGesture } from '@use-gesture/react';
import { animated, useSprings } from '@react-spring/web';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

const Rdux = () => {
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [springs, set] = useSprings(items.length, (index) => ({
    y: index * 50,
    zIndex: 1,
    config: { tension: 500, friction: 50 },
  }));

  const bind = useGesture({
    onDragStart: ({ args: [index] }) => {
      setDraggingIndex(index);
      set((i) => {
        if (index !== i) {
          return { y: i * 50, zIndex: 1 };
        }
        return { zIndex: 2 };
      });
    },
    onDrag: ({ down, movement: [_, my], args: [index] }) => {
      set((i) => {
        if (draggingIndex === null) return;
        const targetIndex = i;
        if (targetIndex !== index && targetIndex !== draggingIndex) {
          return { y: targetIndex * 50, zIndex: 1 };
        }
        return { y: down ? my : i * 50, zIndex: 2 };
      });
    },
    onDragEnd: ({ args: [index] }) => {
      setDraggingIndex(null);
      set((i) => {
        if (i === index) return { y: index * 50, zIndex: 1 };
        const targetIndex = draggingIndex;
        if (targetIndex !== null && targetIndex !== index) {
          return { y: targetIndex * 50, zIndex: 1 };
        }
        return { y: i * 50, zIndex: 1 };
      });
    },
  });

  return (
    <div className="list">
      {springs.map(({ y, zIndex }, index) => (
        <animated.div
          key={items[index]}
          className={`list-item ${draggingIndex === index && 'dragging'}`}
          style={{
            transform: y.interpolate((y) => `translate3d(0,${y}px,0)`),
            zIndex,
          }}
          {...bind(index)}
        >
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
};

export default Rdux;
