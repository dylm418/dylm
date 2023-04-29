import React, {useState, useMemo} from 'react';
import './Styles.css';

function Imgbx(props) {
  return (
    <div>
          <div class="cardContainer">
            <img  src={props.src} class="imgArea">
          </img>
          </div>
  </div>
  );
}

export default Imgbx;
