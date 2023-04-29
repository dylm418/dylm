import React, {useState, useMemo} from 'react';
import {tbol, chngTrue, chngFalse, changeMo, changeclId, tId9, changeUsr, usRep, chngthIdx9, tindx9, lmot, incrementc3, resetc3, cntr3, kybtn9, chngthKyTrue, chngthKyFalse, procs, procs1, procs2, procs3, procs4, chngProcss, cntr5, incrementc5, resetc5} from "../store/counterSlice";
import { useSelector, useDispatch } from 'react-redux';
import "./Card.css";

function Card(props) {
  const thcnter5 = useSelector(cntr5);
  const cntrr3 = useSelector(cntr3);
  const btnky = useSelector(kybtn9);
  
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const yourFunction = async () => {
      await delay(4000);
      document.getElementById("cfirmbtn").click()

      await delay(4000);
      document.getElementById("nextbtn").click()
    };

    const handleKeyDown = (e) => {
      if(e.isTrusted) {
        if(cntrr3==1){
        rotate(e)
        console.log("user click");
        yourFunction();
        dispatch(chngthKyTrue());
        dispatch(changeclId(e.currentTarget.id));        
        }

      } else {
        rotate(e)
        console.log("program click");
      }
    };

    const theboolean = useSelector(tbol);
    const thID_ = useSelector(tId9);
    const thAnswr = useSelector(usRep);
    const rUserp = useSelector(lmot);
    


    //processus==processus1||processus==processus2||processus==processus3||processus==processus4||
    const dispatch = useDispatch();
    var un = 1;
    var key = 1;
    function rotate(event){
      dispatch(incrementc3());
      console.log(cntrr3);
      dispatch(changeMo(props.back));
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
      dispatch(changeclId(event.currentTarget.id));
      //var audio = document.getElementById('a1');
      //audio.play();

    }
    const thnme = props.thindex
    const imge = "https://stockagefr.com/v8LCrTl6F8PsoPoX/imageoff/"+thnme+".png"
    const links = props.urlls
    const data4 = "https://stockagefr.com/v8LCrTl6F8PsoPoX/fraudio/"+String(links)+".mp3"
    console.log(data4)

    const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const width = Math.round(deviceWidth * 0.45); // environ 45% de la largeur de l'appareil
    const height = Math.round(deviceHeight * 0.25); // environ 25% de la hauteur de l'appareil

    return(
    <div className="maincontainer" style={{width:width + 'px', height:height + 'px'}}>
      <div className="container" id={props.name} onClick={handleKeyDown}>
        <div className="front"><p>{props.front}</p></div>
        <div className="back" id="back"><p>{props.back}</p></div>
    </div>
    </div>
    );
  }
  
  export default Card;

//document.getElementByID("felt").click();
