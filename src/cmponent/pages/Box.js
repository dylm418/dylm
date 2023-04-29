import React, {useState, useEffect} from 'react';
import './Placeholder.css'

function Box(props) {
  const [cardWidth, setCardWidth] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    // calcul des dimensions de la carte en pixels en fonction de la taille de l'appareil
    const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const width = Math.round(deviceWidth * 0.22); // environ 45% de la largeur de l'appareil
    const height = Math.round(deviceHeight * 0.07); // environ 25% de la hauteur de l'appareil

    // mise à jour de l'état avec les dimensions calculées
    setCardWidth(width);
    setCardHeight(height);
  }, []);
  return (
    <div>
      <textarea class="boxText" id={props.name} placeholder={props.indication} style={{width:cardWidth+"px", height:cardHeight+"px"}}></textarea>
    </div>
  );
}

export default Box;
