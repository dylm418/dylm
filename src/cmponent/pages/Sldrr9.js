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
import Modal9 from './Modal9';
import Box from './Box';
import './Styles.css';


function Sldrr9(props) {

  const counter1 = useSelector(cntr1);
  const counter2 = useSelector(cntr2);
  const counter3 = useSelector(cntr3);
  const counter4 = useSelector(cntr4);
  const counter5 = useSelector(cntr5);
  const theboolean = useSelector(tbol);
  const mo = useSelector(lmot);
  const dispatch = useDispatch();
  const cntr9 = useSelector(tindx9);
  const keybtn9 = useSelector(kybtn9);
  const thID_ = useSelector(tId9);
  
  var data = {
    textFront2:props.front, //données
    textBack2:props.back,
  };
  //y,x
  var thsize = data.textFront2.length;
  var front4 = separerTab(props.cb,thsize,data.textFront2); //separe les tableaux
  var back4 = separerTab(props.cb,thsize,data.textBack2);

  const theIndx = useMemo(()=>{ //index de mélange identique pour la question ?
    var quatre = theIndex(back4[counter1].length) 
    return quatre},[counter1,counter4]);

  
  const theIndx2 = useMemo(()=>{ //index de mélange identique pour les reponses possible
    var quatre = theIndex(back4[counter1].length) 
    return quatre},[counter1,counter4]);
    


  const value = useMemo(() => { //melange tab question qui doit-être afficher sur y
    return mixedArray(back4[counter1],back4[counter1].length,theIndx)
  }, [counter1,counter4]);

  //correspondance front et back
  

  const value9 = useMemo(() => { //melange tab question qui doit-être afficher //la réponse sur y
    return mixedArray(front4[counter1],front4[counter1].length,theIndx)
  }, [counter1,counter4]);


  const [functionExecuted, setFunctionExecuted] = useState(false)
  if (counter2 == value.length && !functionExecuted) {
      dispatch(incrementc1())
      dispatch(resetc2())       //fonction qui va se lancer directement
      for(let e = 0; e < counter2; e++){
        document.getElementById(e).style.background="linear-gradient(#594b74, #975c99)";
    }
     setFunctionExecuted(true)
  }

  console.log(mo);
  
  const mixedAr = useMemo(() => { {/* se qui doit-être afficher à l'écran */} // placer le signal pour savoir quand melanger
  var un = array2D(2)
  un[0]=mixedArray(separerTab(props.cb,thsize,data.textFront2)[counter1],separerTab(props.cb,thsize,data.textFront2)[counter1].length,theIndx2)
  un[1]=mixedArray(separerTab(props.cb,thsize,data.textBack2)[counter1],separerTab(props.cb,thsize,data.textBack2)[counter1].length,theIndx2)
  return un
  }, [counter1,counter4]);


  const thRep = useMemo(() => {
    dispatch(chngthIdx9(mixedAr[1].indexOf(value[counter2])));
    dispatch(changeMo(value9[counter2]));
 }, [counter2,counter4]);


function getMultipleRandom(arr4, num4) {
  const shuffled = [...arr4].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num4);
}

function shuffle(array){
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const thRep94 = useMemo(() => {
    var array7 = getMultipleRandom(front4,7);
    array7[0].push(value9[counter2]);
    var arrf = shuffle(array7);
    console.log(array7);
    return arrf;
}, [counter2,counter4]);


  var data9 = {
    textFront2:["jardin", "serre tropicale", "prenez soin de vous", "piscine", "salle de fitness", "terrain de tennis", "salle de cinéma", "garage"], //données
    textBack2:["garden", "tropical greenhouse", "take care", "swimming pool", "fitness room", "tennis court", "Movie room", "garage"],
  };
  //y,x
  var array = ["900px", "700px", "500px", "300px", "100px"];
  var array2 = ["500px", "100px", "700px", "300px", "900px"];
  function generateRandom(min = 0, max = array2.length) {
    let difference = max - min; 
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
 }
 var thRep9;
 setInterval(shuffle(array), 2000);
 //setInterval(thRep9 = thRep94, 22000);

  return (
    <div>
      <div className="thbtn">
      {<p>{value[counter2]}:</p>}
      {<p>{counter2}/{data.textBack2.length}</p>}
      </div>
       <div style={{"display":"flex","flex-direction": "column"}} className="sqbox4">
        {thRep94[0].map((item,index)=>{ return <Sldrmd countez={thRep94.length} pstn={array[generateRandom()]} id={index} txt={item}></Sldrmd>})}
      </div>
      <Modal9 rep9={value[counter2]+":"+value9[counter2]}></Modal9>   
    </div>


  );
}

export default Sldrr9;
