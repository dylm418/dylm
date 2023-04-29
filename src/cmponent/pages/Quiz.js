import React, {useState, useMemo, useEffect} from 'react';
import Card from "./Card";
import progressBar from './progressBar';
import {separerTab, theIndex, mixedArray, array2D, randomN, genrateKey} from './functionFile';
import { useSelector, useDispatch } from 'react-redux';
import {cntr1, cntr2, cntr3, cntr4, tbol, incrementc1, resetc1, incrementc2, resetc2, lmot, incrementc4, chngTrue, chngFalse, changeclId, tId9, changeUsr, usRep, chngthIdx9, tindx9, kybtn9, chngthKyFalse, chngthKyTrue, incrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, counter5, counter5k, cntr5, resetc5} from "../store/counterSlice";
import { Grid, Segment, Button, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function Quiz(props) {
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
    thid:props.nmbr,
    theid:props.theindx,
  };
  //y,x
  var thsize = data.textFront2.length;
  var front4 = separerTab(props.cb,thsize,data.textFront2); //separe les tableaux
  var back4 = separerTab(props.cb,thsize,data.textBack2);
  var imgid = separerTab(props.cb,thsize,data.theid);
  var soundnb = separerTab(props.cb,thsize,data.thid);

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

  
  const mixedAr = useMemo(() => { {/* se qui doit-être afficher à l'écran */} // placer le signal pour savoir quand melanger
  var un = array2D(4)
  un[0]=mixedArray(separerTab(props.cb,thsize,data.textFront2)[counter1],separerTab(8,thsize,data.textFront2)[counter1].length,theIndx2)
  un[1]=mixedArray(separerTab(props.cb,thsize,data.textBack2)[counter1],separerTab(8,thsize,data.textBack2)[counter1].length,theIndx2)
  un[2]=mixedArray(separerTab(props.cb,thsize,data.theid)[counter1],separerTab(8,thsize,data.theid)[counter1].length,theIndx2)
  un[3]=mixedArray(separerTab(props.cb,thsize,data.thid)[counter1],separerTab(8,thsize,data.thid)[counter1].length,theIndx2)
  return un
  }, [counter1,counter4]);

  var reponse;
  function nextClick(){
    if(mo === value9[counter2])
    {
        dispatch(incrementc2());
        dispatch(incrementc5());
    }
    if(mo!=value9[counter2])
    {
        dispatch(resetc1());
        dispatch(resetc2());
        dispatch(resetc5());
        dispatch(incrementc4())
        document.getElementById(cntr9).click();
        console.log(mo);
        
        const fromIndex = data.textFront2.indexOf(mo);
        const toIndex = 2;
        const element = data.textFront2.splice(fromIndex, 1)[0];
        console.log(element);
        data.textFront2.splice(toIndex, 0, element);

        const fromIndex2 = data.textBack2.indexOf(value[counter2]);
        const toIndex2 = 2;
        const element2 = data.textBack2.splice(fromIndex2, 1)[0];
        console.log(element2);
        data.textBack2.splice(toIndex2, 0, element2);

        mixedAr[0]=mixedArray(separerTab(props.cb,thsize,data.textFront2)[counter1],separerTab(8,thsize,data.textFront2)[counter1].length,theIndx2)
        mixedAr[1]=mixedArray(separerTab(props.cb,thsize,data.textBack2)[counter1],separerTab(8,thsize,data.textBack2)[counter1].length,theIndx2)
        mixedAr[2]=mixedArray(separerTab(props.cb,thsize,data.theid)[counter1],separerTab(8,thsize,data.theid)[counter1].length,theIndx2) 
        mixedAr[3]=mixedArray(separerTab(props.cb,thsize,data.thid)[counter1],separerTab(8,thsize,data.thid)[counter1].length,theIndx2)   
        //location.reload();    

    }
    dispatch(chngTrue());
    dispatch(resetc3());
    dispatch(incrementc3());    
    //mixedAr
    
    if(counter2==counter2 == value.length-1){
      document.getElementById("btn-modal").click();
    }

  }

  function cfirmClcik(){
    dispatch(chngFalse()); //ici
    console.log()
    if(mo !=value9[counter2]){     
      document.getElementById(cntr9).click()
    }
    document.getElementById(thID_).click()
  }

  
  let thData;
  let thKey = false
  function thfn(){
  if(!thKey){
    thKey = true;
    thData = Math.floor(Math.random() * 49);
    return thData;
  }
  else{
    return thData;
  }
}

const [keylnch, stkeylnch] = useState(false)
if (kybtn9 == true && !keylnch) {
    //fonction qui va se lancer directement   mixedAr[0][1] back   mixedAr[1][0] front
    setTimeout(document.getElementById("cfirmbtn").click(), 10000);
    setTimeout(document.getElementById("nextbtn").click(), 10000);
    
    stkeylnch(true);
}

const thRep = useMemo(() => {
  dispatch(chngthIdx9(mixedAr[0].indexOf(value9[counter2])));
  dispatch(changeUsr(value9[counter2]));
}, [counter2]);


function getCurentprc(tablen,current){
  var rslts = current*100/tablen;
  return rslts;
}

function trsnlatToPx(tablen,current){
 var th = getCurentprc(tablen,current) 
 var thprc = 400*th/100;
 return thprc;
}
const [cardWidths, setCardWidths] = useState(0);
const [cardHeights, setCardHeights] = useState(0);
  
useEffect(() => {
    // calcul des dimensions de la carte en pixels en fonction de la taille de l'appareil
    const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const width = Math.round(deviceWidth * 0.98); // environ 45% de la largeur de l'appareil
    const height = Math.round(deviceHeight * 0.89); // environ 25% de la hauteur de l'appareil

    // mise à jour de l'état avec les dimensions calculées
    setCardWidths(`${width}px`);
    setCardHeights(`${height}px`);
    console.log(cardHeights)
  }, []);

  const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
  return (
    <div style={{ backgroundColor: "#1f1f1f", width: `${deviceWidth}px`, height: `${deviceHeight}px` }}>
        <div style={{ backgroundColor: "#0b0c09", width: `${deviceWidth*1}px`, height: `${deviceHeight*0.05}px`, borderRadius:"11px", marginBottom: `${deviceHeight*0.0125}px`, display:"flex", justifyContent: "space-between" }}>
                {<p style={{ color: "aliceblue", padding:8 }}>{counter2}/{value9.length}</p>}
                {theboolean ? <p style={{ color: "aliceblue", padding:8 }}>{value9[counter2]}:</p>: <p style={{ color: "aliceblue", padding:8 }}>{value9[counter2]}:{value[counter2]}</p>}
        </div>
        
        <div style={{ backgroundColor: "#0b0c09", width: `${deviceWidth*1}px`, height: `${deviceHeight*0.8725}px`, borderRadius:"11px", marginBottom: `${deviceHeight*0.0125}px`,overflow: 'auto' }}>
                  <div style={{display: 'flex', flexWrap: 'wrap', maxWidth: '100%', justifyContent:'center', margin: '10px', gap:4, marginRight:4}}>
                      {mixedAr[0].map((a,index) => <Card front={mixedAr[1][index]} back={mixedAr[0][index]} name={index} thindex={mixedAr[2][index]} urlls={mixedAr[3][index]}></Card>)}
                  </div>

                  <div style={{margin:20}}>
                      {theboolean ? <button id="cfirmbtn" onClick={()=>cfirmClcik()}>Confirm</button>: <button id="nextbtn" onClick={()=>nextClick()}>Next</button>}        
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

export default Quiz;