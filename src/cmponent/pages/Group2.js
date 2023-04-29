import React, { useEffect, useRef, useMemo, useState } from 'react';
import {separerTab, theIndex, mixedArray, array2D, randomN, genrateKey} from './functionFile';
import { useSelector, useDispatch } from 'react-redux';
import {cntr1, cntr2, cntr3, cntr4, tbol, incrementc1, resetc1, incrementc2, resetc2, lmot, incrementc4, chngTrue, chngFalse, changeclId, tId9, changeUsr, usRep, chngthIdx9, tindx9, kybtn9, chngthKyFalse, chngthKyTrue, incrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, counter5, counter5k, cntr5, resetc5} from "../store/counterSlice";
import { Grid, Segment, Button, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Group.css'
import Sound from './Sound';
import Video from './Video';

const Group2 = (props) => {
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
  //nmbr={data9.number}
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
      dispatch(incrementc1())
      dispatch(resetc2())       //fonction qui va se lancer directement
     setFunctionExecuted(true)
  }


  const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const items = ["item1", "item2", "item3", "item4", "item5"];
  const showImage = false;
  const showSound = false;
  const showVideo = true;

  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const mixedAr = useMemo(() => { {/* se qui doit-être afficher à l'écran */} // placer le signal pour savoir quand melanger
  var un = array2D(2)
  un[0]=mixedArray(separerTab(props.cb,thsize,data.textFront2)[counter1],separerTab(8,thsize,data.textFront2)[counter1].length,theIndx2)
  un[1]=mixedArray(separerTab(props.cb,thsize,data.textBack2)[counter1],separerTab(8,thsize,data.textBack2)[counter1].length,theIndx2)
  return un
  }, [counter1,counter4]);
  
  function handleAnswerChange(event) {
    const index = event.target.dataset.index;
    const isChecked = event.target.checked;

    // Add or remove the selected answer from the list
    if (isChecked) {
      setSelectedAnswers([...selectedAnswers, index]);
    } else {
      setSelectedAnswers(selectedAnswers.filter((answer) => answer !== index));
    }
  }

  const valueCopy = useMemo(() => { //melange tab question qui doit-être afficher //la réponse
    return mixedArray([...value9],[...value9].length,theIndex([...value9].length))
  }, [counter1]);

  function validateAnswers() {
    const correctAnswers = items.filter((_, i) => items[i]);
    const selectedAnswerValues = selectedAnswers.map(index => items[index]);

    return (selectedAnswerValues) //retourne un tableau des éléments cocher par l'utilisateur
  }


  return (
    <div style={{ backgroundColor: "#1f1f1f", width: `${deviceWidth}px`, height: `${deviceHeight}px` }}>
        <div style={{ backgroundColor: "#0b0c09", width: `${deviceWidth*1}px`, height: `${deviceHeight*0.05}px`, borderRadius:"11px", marginBottom: `${deviceHeight*0.0125}px`, display:"flex", justifyContent: "space-between" }}>
                {<p style={{ color: "aliceblue", padding:8 }}>0/20</p>}
                {<p style={{ color: "aliceblue", padding:8 }}>00:00</p>}
        </div>
        
        <div style={{ backgroundColor: "#0b0c09", width: `${deviceWidth*1}px`, height: `${deviceHeight*0.8725}px`, borderRadius:"11px", marginBottom: `${deviceHeight*0.0125}px`, display:'flex', justifyContent:'center' }}>
                <div style={{ backgroundColor: "#0b0c09", width: `${deviceWidth*1}px`, height: `${deviceHeight*0.8725}px`, borderRadius:"11px", marginBottom: `${deviceHeight*0.0125}px`,flexDirection:'column' }}>
                    <div class="container2" style={{display:'flex',justifyContent:'center', flexDirection:'column'}}>
                        <div style={{display:'flex',justifyContent:'center', flexDirection:'column', textAlign:'start', padding:9}}>
                            <p>{value[counter2]}</p>
                        </div>

                    </div>

                    <div class="container2">
                                <div style={{height:'100%', width:'100%',display:'flex', justifyContent:'center', alignItems:'center', padding:9}}>
                                    <div>
                                            {valueCopy.map((a, index) => (
                                                <label style={{ display: "block", color: "black" }}>
                                                <input type="checkbox" name="answer" value={valueCopy[index]} checked={selectedAnswers.includes(index.toString())} onChange={handleAnswerChange} data-index={index}/>
                                                    {valueCopy[index]}
                                                </label>
                                            ))}
                                    </div>
                                </div>
                    </div>
                            <div style={{marginLeft:7}}>
                                <button onClick={validateAnswers}>Confirm</button>
                            </div>
                </div>
        </div>

        <div style={{ backgroundColor: "#0b0c09", width: `${deviceWidth*1}px`, height: `${deviceHeight*0.052}px`, borderRadius:"11px", display:'flex', justifyContent:"space-between", alignItems:"center"}}>
            <Icon name='arrow left' size='large'style={{margin:"5px",color: "aliceblue"}}/>
            <Icon name='home' size='large'style={{margin:"5px",color: "aliceblue"}}/>
            <Icon name='setting' size='large'style={{margin:"5px",color: "aliceblue"}}/>
        </div>
    </div>
  );
}

export default Group2;
