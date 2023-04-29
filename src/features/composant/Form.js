import React, {useState, useMemo} from 'react';
import Card from "./Card";
import Modal from "./Modal";
import progressBar from './progressBar';
import {separerTab, theIndex, mixedArray, array2D, randomN, genrateKey} from './functionFile';
import { useSelector, useDispatch } from 'react-redux';
import { incrementc1, decrementc1, resetc1, incrementc2, decrementc2, resetc2, changeMo, incrementc4, decrementc4, resetc4, chngTrue, chngFalse, changeclId, changeUsr, chngthIdx9, chngthKyFalse, chngthKyTrue, incrementc3, decrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, resetc5, chngflse, chngtrue, incrementc6, decrementc6, resetc6, changeModTo, selectCountr1, selectCountr2, selectCountr3, selectCountr4, selectCountr5, selectCountr6, selectThbl, selectMotr, selectUsRp, selectClId, selectThIdx9, selectKybtn9, selectProcss, selectProcss1, selectProcss2, selectProcss3, selectProcss4, selectCounter5, selectModeTo} from "../counter/counterSlice";
import Quiz from './Quiz';
import Choix from './Choix';
import Imgbx from './Imgbx';
import Menu from './Menu';
import Schema from './Schema';
import DataPge from './DataPge';
import Motmls from './Motmls';
import Qcmword from './Qcmword';
import Sldrmd from './Sldrmd';
import Sldrr9 from './Sldrr9';
import Modal9 from './Modal9';
import './Styles.css';
/*  <Router>
<Quiz path="/" />
<Choix path="/choice" />
<Menu path="/menu" />
<Schema path="/schema" />
</Router>*/


function Form(props) {
  return (
    <div className='cnt20'>
      <div id="qstn">
        <input type="text" placeholder="...." value={props.question} readonly="readonly"></input>
      </div>
        <img src={props.imge} id="thbox2">
        </img>
        <div id="repn">
        <input type="text" placeholder="...." value={props.reponse} id={props.name} autocomplete="off"></input>
      </div>
    </div>



  );
}

export default Form;
