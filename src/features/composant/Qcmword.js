import React, {useState, useMemo} from 'react';
import Card from "./Card";
import Modal from "./Modal";
import progressBar from './progressBar';
import {separerTab, theIndex, mixedArray, array2D, randomN, genrateKey, incremenTer} from './functionFile';
import { useSelector, useDispatch } from 'react-redux';
import { incrementc1, decrementc1, resetc1, incrementc2, decrementc2, resetc2, changeMo, incrementc4, decrementc4, resetc4, chngTrue, chngFalse, changeclId, changeUsr, chngthIdx9, chngthKyFalse, chngthKyTrue, incrementc3, decrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, resetc5, chngflse, chngtrue, incrementc6, decrementc6, resetc6, changeModTo, selectCountr1, selectCountr2, selectCountr3, selectCountr4, selectCountr5, selectCountr6, selectThbl, selectMotr, selectUsRp, selectClId, selectThIdx9, selectKybtn9, selectProcss, selectProcss1, selectProcss2, selectProcss3, selectProcss4, selectCounter5, selectModeTo} from "../counter/counterSlice";
import Quiz from './Quiz';
import Choix from './Choix';
import Imgbx from './Imgbx';
import Menu from './Menu';
import Schema from './Schema';
import DataPge from './DataPge';
import Motmls from './Motmls';
/*  <Router>
<Quiz path="/" />
<Choix path="/choice" />
<Menu path="/menu" />
<Schema path="/schema" />
</Router>*/


function Qcmword(props) {

  const counter1 = useSelector(selectCountr1);
  const counter2 = useSelector(selectCountr2);
  const counter3 = useSelector(selectCountr3);
  const counter4 = useSelector(selectCountr4);
  const counter5 = useSelector(selectCountr5);
  const theboolean = useSelector(selectThbl);
  const mo = useSelector(selectMotr);
  const dispatch = useDispatch();
  const cntr9 = useSelector(selectThIdx9);
  const keybtn9 = useSelector(selectKybtn9);
  const thID_ = useSelector(selectClId);
  
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

  const theIndx2 = useMemo(()=>{ //index de mélange identique pour les reponse possible
    var quatre = theIndex(back4[counter1].length) 
    return quatre},[counter1,counter4]);
    


  const value = useMemo(() => { //melange tab question qui doit-être afficher
    return mixedArray(back4[counter1],back4[counter1].length,theIndx)
  }, [counter1,counter4]);

  //correspondance front et back
  

  const value9 = useMemo(() => { //melange tab question qui doit-être afficher //la réponse
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


  const thRep9 = useMemo(() => {
    mixedAr[0]=mixedArray(separerTab(props.cb,thsize,data.textFront2)[counter1],separerTab(props.cb,thsize,data.textFront2)[counter1].length,theIndx2)
    mixedAr[1]=mixedArray(separerTab(props.cb,thsize,data.textBack2)[counter1],separerTab(props.cb,thsize,data.textBack2)[counter1].length,theIndx2)
  }, [counter4]);

const thRep = useMemo(() => {
  dispatch(chngthIdx9(mixedAr[1].indexOf(value[counter2])));
  dispatch(changeMo(value[counter2]));
  dispatch(changeModTo(props.mod));
}, [counter2,counter4]);

console.log(mixedAr[1].indexOf(value[counter2]))
dispatch(changeUsr(mixedAr[1].length));

var thenmbr=(incremenTer(back4[counter1].length,data.textFront2.length));
  return (
    <form className='container4'>
            <div class="cntnr">
              <progress id="file" max={data.textBack2.length} value={counter5}>100%</progress>
            </div>
      <div className="thbtn">
      {<p>{value9[counter2]}:</p>}
      {<p>{counter5}/{data.textBack2.length}</p>}
      </div>
    <div style={{"display": "flex","flexWrap":"wrap"}}> 
    {mixedAr[0].map((a,index) => <Motmls txt={mixedAr[1][index]} name={index} nmbr={thenmbr} counterz={counter5}></Motmls>)}   
    </div>
    </form>

  );
}

export default Qcmword;
