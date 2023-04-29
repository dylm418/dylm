import React, {useState, useMemo} from 'react';
import {cntr6, incrementc6, chngflse, chngtrue, thbol} from "../store/counterSlice";
import { useSelector, useDispatch } from 'react-redux';
import './Card.css';

function Card9(props) {
    const cntrr6 = useSelector(cntr6);
    const bl = useSelector(thbol);
    const dispatch = useDispatch();

    const delay = ms => new Promise(res => setTimeout(res, ms));
    const yourFunction = async () => {
      await delay(5000);
      document.getElementById("cfirmbtn").click()

      await delay(5000);
      document.getElementById("nextbtn").click()
    };

    const handleKeyDown = (e) => {
        dispatch(incrementc6())
        try {
            document.getElementById(cntrr6).innerHTML = props.back;
          } catch (error) {
            console.log("erreur")
            dispatch(chngtrue());
            console.log(bl);
          }
        console.log(cntrr6 + "valeur de");
      if(e.isTrusted) {
        rotate(e)
        console.log("user click");
      } else {
        rotate(e)
        console.log("program click");
      }
    };


    function rotate(event){
      var x= document.getElementById(props.name);
      x.style.WebkitTransform = 'rotateY(' + 180 +'deg)';
      var el = document.getElementById(props.name);
      var st = window.getComputedStyle(el, null);
      var tr = st.getPropertyValue("-webkit-transform")
      var values = tr.split('(')[1].split(')')[0].split(',');
      var a = values[0];
      var b = values[1];
      var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
      if(angle === 180)
      {
        let x= document.getElementById(props.name);
        x.style.WebkitTransform = 'rotateY(' + 0 +'deg)';
      }
    }
    const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const width = Math.round(deviceWidth * 0.45); // environ 45% de la largeur de l'appareil
    const height = Math.round(deviceHeight * 0.25); // environ 25% de la hauteur de l'appareil

    return (
    <div className="maincontainer" style={{width: width + 'px', height: height + 'px'}}>
      <div className="container" id={props.name} onClick={handleKeyDown}>
      <div className="front"><p>{props.front}</p></div>
      <div className="back" id="back"><p>{props.back}</p></div>
    </div>
    </div>
    );
  }
  
export default Card9;

