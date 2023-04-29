import React, { useState, useEffect, useRef } from 'react';
import gsap from "gsap";

export default function List() {
  const items = ["item1", "item2", "item3", "item4"];
  const reponse = ["item4", "item3", "item2", "item1"];
  const itemsCopy = [...items];
  const [list, setList] = useState(items);
  const refs = useRef(items.map(() => React.createRef()));
  var counter = 0;
  //fonction qui permet de changer la position de deux items la transition en animation par rapport
  function swapPosition(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();
    
    gsap.to(element1, {duration: 0.5, x: rect2.left - rect1.left, y: rect2.top - rect1.top});
    gsap.to(element2, {duration: 0.5, x: rect1.left - rect2.left, y: rect1.top - rect2.top});
  }

  function handleShuffle() {
    if(counter==0){
      counter=1;
      for(let a = 0; a < itemsCopy.length;a++){
        if(reponse[a]!=itemsCopy[a]){
            let indice = itemsCopy.indexOf(reponse[a])
            swapPosition(refs.current[a].current, refs.current[indice].current)
        }
      }      
    }
  }

  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      {list.map((item, index) => (
        <div 
          key={index} 
          ref={refs.current[index]}
          style={{width: '90px',height: '40px',backgroundColor: '#FF7F50',margin:'5px', display:"flex",justifyContent:"center", alignItems:"center", borderRadius:"4px", transition: "0.4s all linear"}}
        >
          <p>{item}</p>
        </div>
      ))}
      <button onClick={handleShuffle}>shuffle</button>
    </div>
  );
}