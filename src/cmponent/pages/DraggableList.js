import React, { useState } from 'react';
import { useGesture } from '@use-gesture/react';
import { animated, useSprings } from '@react-spring/web';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

const DraggableList = () => {
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [springs, set] = useSprings(items.length, (index) => ({
    y: index * 50,
    config: { tension: 500, friction: 50 },
  }));

  const bind = useGesture({
    onDragStart: ({ args: [index] }) => {
      setDraggingIndex(index);
    },
    onDrag: ({ down, movement: [_, my] }) => {
      set((index) => {
        if (draggingIndex === null || index !== draggingIndex) return;
        return { y: down ? my : index * 50 };
      });
    },
    onDragEnd: () => {
      setDraggingIndex(null);
    },
  });

  return (
    <div className="list">
      {springs.map(({ y }, index) => (
        <animated.div
          key={items[index]}
          className={`list-item ${draggingIndex === index && 'dragging'}`}
          style={{ y }}
          {...bind(index)}
        >
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
};

export default DraggableList;