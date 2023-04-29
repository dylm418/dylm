import React, {useState, useMemo} from 'react';
import Card from "./Card";
import Modal from "./Modal";
import progressBar from './progressBar';
import {separerTab, theIndex, mixedArray, array2D, randomN, genrateKey} from './functionFile';
import { useSelector, useDispatch } from 'react-redux';
import {cntr1, cntr2, cntr3, cntr4, tbol, incrementc1, resetc1, incrementc2, resetc2, lmot, incrementc4, chngTrue, chngFalse, changeclId, tId9, changeUsr, usRep, chngthIdx9, tindx9, kybtn9, chngthKyFalse, chngthKyTrue, incrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, counter5, counter5k, cntr5, resetc5, changeModTo, changeMo} from "../store/counterSlice";
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
