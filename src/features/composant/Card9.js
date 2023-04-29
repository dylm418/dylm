import React, {useState, useMemo} from 'react';
import { incrementc1, decrementc1, resetc1, incrementc2, decrementc2, resetc2, changeMo, incrementc4, decrementc4, resetc4, chngTrue, chngFalse, changeclId, changeUsr, chngthIdx9, chngthKyFalse, chngthKyTrue, incrementc3, decrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, resetc5, chngflse, chngtrue, incrementc6, decrementc6, resetc6, changeModTo, selectCountr1, selectCountr2, selectCountr3, selectCountr4, selectCountr5, selectCountr6, selectThbl, selectMotr, selectUsRp, selectClId, selectThIdx9, selectKybtn9, selectProcss, selectProcss1, selectProcss2, selectProcss3, selectProcss4, selectCounter5, selectModeTo} from "../counter/counterSlice";
import { useSelector, useDispatch } from 'react-redux';
import './Styles.css';

function Card9(props) {
    const cntrr6 = useSelector(selectCountr6);
    const bl = useSelector(selectThbl);
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
    
    
    return (
    <div className="maincontainer">
    <div className="container" id={props.name} onClick={handleKeyDown}>
    <div className="front"><p>{props.front}</p></div>
    <div className="back" id="back"><p>{props.back}</p></div>
    </div>
    </div>
    );
  }
  
export default Card9;

