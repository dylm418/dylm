import React, {useState, useMemo} from 'react';
import {separerTab, theIndex, mixedArray, array2D, randomN, genrateKey, incremenTer} from './functionFile';
import { useSelector, useDispatch } from 'react-redux';
import {cntr1, cntr2, cntr3, cntr4, tbol, incrementc1, resetc1, incrementc2, resetc2, lmot, incrementc4, chngTrue, chngFalse, changeclId, tId9, changeUsr, usRep, chngthIdx9, tindx9, kybtn9, chngthKyFalse, chngthKyTrue, incrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, counter5, counter5k, cntr5, resetc5, changeModTo, changeMo} from "../store/counterSlice";
import Motmls from './Motmls';
import { Grid, Segment, Button, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


function Qcmword(props) {

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
const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

return (
  <div style={{ backgroundColor: "#1f1f1f", width: `${deviceWidth}px`, height: `${deviceHeight}px` }}>
        <div style={{ backgroundColor: "#0b0c09", width: `${deviceWidth*1}px`, height: `${deviceHeight*0.05}px`, borderRadius:"11px", marginBottom: `${deviceHeight*0.0125}px`, display:"flex", justifyContent: "space-between" }}>
                {<p style={{ color: "aliceblue", padding:8 }}>{counter2}/{value9.length}</p>}
                {theboolean ? <p style={{ color: "aliceblue", padding:8 }}>{value9[counter2]}:</p>: <p style={{ color: "aliceblue", padding:8 }}>{value9[counter2]}:{value[counter2]}</p>}
        </div>
      
      <div style={{ backgroundColor: "#0b0c09", width: `${deviceWidth*1}px`, height: `${deviceHeight*0.8725}px`, borderRadius:"11px", marginBottom: `${deviceHeight*0.0125}px`, overflow:'auto' }}>
            <div style={{display: 'flex', flexWrap: 'wrap', maxWidth: '100%', justifyContent:'center', gap:9, marginTop:9}}>
                {mixedAr[0].map((a,index) => <Motmls txt={mixedAr[1][index]} name={index} nmbr={thenmbr} counterz={counter5}></Motmls>)}
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

export default Qcmword;















