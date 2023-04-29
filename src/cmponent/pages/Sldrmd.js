import React, {useState, useMemo} from 'react';
import './Styles.css';
import Card from "./Card";
import Modal from "./Modal";
import progressBar from './progressBar';
import {separerTab, theIndex, mixedArray, array2D, randomN, genrateKey} from './functionFile';
import { useSelector, useDispatch } from 'react-redux';
import {cntr1, cntr2, cntr3, cntr4, tbol, incrementc1, resetc1, incrementc2, resetc2, lmot, incrementc4, chngTrue, chngFalse, changeclId, tId9, changeUsr, usRep, chngthIdx9, tindx9, kybtn9, chngthKyFalse, chngthKyTrue, incrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, counter5, counter5k, cntr5, resetc5, changeModTo, changeMo} from "../store/counterSlice";


function Sldrmd(props) {
  //y,x
    const dispatch = useDispatch();
    const mo = useSelector(lmot);

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

