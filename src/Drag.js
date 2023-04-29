import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { useSpring } from '@react-spring/web';

const Drag = (props) => {
  const [state, setState] = useState(props.thlist);

  const items = props.thlist;

  const animatedStyle = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
    <ReactSortable list={state} setList={setState}>
      {items.map((item, index) => (
        <div 
          key={index} 
          style={{
            ...animatedStyle,
            width: '90px', 
            height: '40px', 
            backgroundColor: '#FF7F50', 
            margin:'5px', 
            display:"flex", 
            justifyContent:"center", 
            alignItems:"center", 
            borderRadius:"4px" 
          }}
        >
          {item}
        </div>
      ))}
    </ReactSortable>
    </div>
  );
};

export default Drag;
