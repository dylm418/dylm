import React, { useState, useRef } from 'react';
import { useTransition, animated, useSpring } from '@react-spring/web';

export default function Sortdata() {
  const [items, setItems] = useState(['item 1', 'item 2', 'item 3']);
  const [depart, setDepart] = useState([0, 50, 100]);
  const [arriver, setArriver] = useState([100, 50, 0]);
  const [list, setList] = useState(items);
  const refs = useRef(items.map(() => React.createRef()));

  const transitions = useTransition(items, {
    keys: (item, index) => item,
    from: (item, index) => ({ transform: `translate3d(0,${depart[index]}px,0)` }),
    enter: (item, index) => ({ transform: `translate3d(0,${depart[index]}px,0)` }),
    leave: (item, index) => ({ transform: `translate3d(0,${depart[index]}px,0)` }),
  });

  const handleClick = () => {
    setItems(["item1", "item2", "item3", "item4", "item5"]);
    setDepart([15,17,13,11,10]);
    setArriver([29,20,26,42,48]);
  };
  
  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <button onClick={handleClick}>Shuffle</button>
      {transitions((style, item, _, index) => (
        <animated.div
          key={item}
          ref={refs.current[index]}
          style={{ ...style, width: '90px', height: '40px', backgroundColor: '#FF7F50', margin: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px' }}
        >
          <p>{item}</p>
        </animated.div>
      ))}
    </div>
  );
}
