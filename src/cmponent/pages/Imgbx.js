import React, {useState, useEffect} from 'react';
import './Imgbx.css';

function Imgbx(props) {
  const [cardWidths, setCardWidths] = useState(0);
  const [cardHeights, setCardHeights] = useState(0);
  
useEffect(() => {
    // calcul des dimensions de la carte en pixels en fonction de la taille de l'appareil
    const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const width = Math.round(deviceWidth * 0.98); // environ 45% de la largeur de l'appareil
    const height = Math.round(deviceHeight * 0.89); // environ 25% de la hauteur de l'appareil

    // mise à jour de l'état avec les dimensions calculées
    setCardWidths(`${width}px`);
    setCardHeights(`${height}px`);
    console.log(cardHeights)
  }, []);
  return (
    <div>
          <div class="cardContainer" >
            <img  src={props.src} class="imgArea" style={{width:cardWidths}}>
          </img>
          </div>
  </div>
  );
}

export default Imgbx;
