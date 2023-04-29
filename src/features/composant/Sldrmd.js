import React, {useState, useMemo} from 'react';


import Card from "./Card";
import Modal from "./Modal";
import progressBar from './progressBar';
import {separerTab, theIndex, mixedArray, array2D, randomN, genrateKey} from './functionFile';
import { useSelector, useDispatch } from 'react-redux';
import { incrementc1, decrementc1, resetc1, incrementc2, decrementc2, resetc2, changeMo, incrementc4, decrementc4, resetc4, chngTrue, chngFalse, changeclId, changeUsr, chngthIdx9, chngthKyFalse, chngthKyTrue, incrementc3, decrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, resetc5, chngflse, chngtrue, incrementc6, decrementc6, resetc6, changeModTo, selectCountr1, selectCountr2, selectCountr3, selectCountr4, selectCountr5, selectCountr6, selectThbl, selectMotr, selectUsRp, selectClId, selectThIdx9, selectKybtn9, selectProcss, selectProcss1, selectProcss2, selectProcss3, selectProcss4, selectCounter5, selectModeTo} from "../counter/counterSlice";


function Sldrmd(props) {
  //y,x
    const dispatch = useDispatch();
    const mo = useSelector(selectMotr);

    function intlValue(){
        for(let e = 0; e < props.counterz; e++){
            document.getElementById(e).style.background="#fe002c";
        }
    }

    function getRep(){
        if(mo==props.txt){
            dispatch(incrementc2());
            //document.getElementById(props.id).style.background="#8ca46c";
        }
        else{
            document.getElementById("btn-modal").click();
        }
        console.log(props.txt);
    }
    var qutr = props.pstn;
    setInterval(intlValue(), 2000);

  return (
    <div>
        <div>
            <div className="sqbox2" id={props.id} style={{"marginLeft":qutr}} onClick={getRep}>
                <p>{props.txt}</p>
            </div>  
            <div className="sqbox9">
            </div>  
        </div>
    </div>

  );
}


export default Sldrmd;

