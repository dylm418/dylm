import React, {useState, useMemo} from 'react';
import progressBar from './progressBar';
import {separerTab, theIndex, mixedArray, array2D, randomN, genrateKey, incremenTer} from './functionFile';
import { useSelector, useDispatch } from 'react-redux';
import {cntr1, cntr2, cntr3, cntr4, tbol, incrementc1, resetc1, incrementc2, resetc2, lmot, incrementc4, chngTrue, chngFalse, changeclId, tId9, changeUsr, usRep, chngthIdx9, tindx9, kybtn9, chngthKyFalse, chngthKyTrue, incrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, counter5, counter5k, cntr5, resetc5, changeModTo, changeMo} from "../store/counterSlice";
import { Grid, Segment, Button, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import FormUnit from './FormUnit';

function FormLnchr(props) {
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
    const bn = 0
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
      
  
  
    const value = useMemo(() => { //melange tab question qui doit-être afficher
      return mixedArray(back4[counter1],back4[counter1].length,theIndx)
    }, [counter1,counter4]);
  
    //correspondance front et back
    
  
    const value9 = useMemo(() => { //melange tab question qui doit-être afficher //la réponse
      return mixedArray(front4[counter1],front4[counter1].length,theIndx)
    }, [counter1,counter4]);
  
  
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
    }, [counter2,counter4]);
    

    const [functionExecuted, setFunctionExecuted] = useState(false) //fonction qui va se lancer directement
    if (counter2 == value.length && !functionExecuted) {
        dispatch(incrementc1())
        dispatch(resetc2())
        setFunctionExecuted(true)
    }

    //envoyés le mot à cherche 
    //récupérer les saisit utilisateurs
    //compare
    //action

    const sleep = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    );

    function dsplyrp(){
        dispatch(chngFalse())
        for(let e = 0; e < value.length; e++){//affichent les réponses  //9 secondes pour la correction
            document.getElementById(e).style.background = "rgb(105, 104, 104)";
            document.getElementById(e).value = value[e];
        }
        //setTimeout(dispatch(incrementc4()),9000);
        
    }

    function nextClick(){
      dispatch(chngTrue())
      if(JSON.stringify(arrayUser)==JSON.stringify(arrayRep)){
        dispatch(incrementc1());
      }
      if(JSON.stringify(arrayUser)!=JSON.stringify(arrayRep)){
          dispatch(incrementc4());
      }
      for(let e = 0; e < value[e].length; e++){//fait un reset des données
        document.getElementById(e).value = "";
      }   
    }

        var arrayUser = [];
        var arrayRep = value;
        async function cfirmClcik(){
        document.getElementById("cfirmbtn").style.visibility="hidden"
        for(let e = 0; e < value.length; e++){ 
          if(value[e]==document.getElementById(e).value){
            document.getElementById(e).style.background="#8ca46c";//vert
            bn+=1
            arrayUser.push(document.getElementById(e).value);
          }else{
            document.getElementById(e).style.background="#fe002c";//rouge
          }
        }
        
        if(JSON.stringify(arrayUser)!=JSON.stringify(arrayRep)){
          await sleep(8000);
          dsplyrp(); //8 secondes pour voir ses erreures
        }
        document.getElementById("cfirmbtn").style.visibility="visible" 
        
        
    }

    var y = (bn*20)/8
    const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return (
      <div style={{ backgroundColor: "#1f1f1f", width: `${deviceWidth}px`, height: `${deviceHeight}px` }}>
        <div style={{ backgroundColor: "#0b0c09", width: `${deviceWidth*1}px`, height: `${deviceHeight*0.05}px`, borderRadius:"11px", marginBottom: `${deviceHeight*0.0125}px`, display:"flex", justifyContent: "space-between" }}>
                {<p style={{ color: "aliceblue", padding:8 }}>{counter2}/{value9.length}</p>}
                {theboolean ? <p style={{ color: "aliceblue", padding:8 }}>{value9[counter2]}:</p>: <p style={{ color: "aliceblue", padding:8 }}>{value9[counter2]}:{value[counter2]}</p>}
        </div>
          
          <div style={{ backgroundColor: "#0b0c09", width: `${deviceWidth*1}px`, height: `${deviceHeight*0.8725}px`, borderRadius:"11px", marginBottom: `${deviceHeight*0.0125}px`, overflow:'auto' }}>
                  <div style={{"display": "flex","flexWrap":"wrap", gap:`${deviceWidth*0.042}px`, marginLeft:`${deviceWidth*0.022}px`,marginTop:`${deviceWidth*0.022}px`}}> 
                      {value9.map((a,index) => <FormUnit question={value9[index]} name={index} boll={false}></FormUnit>)}     
                  </div>

                  <div style={{marginLeft:`${deviceWidth*0.022}px`,marginTop:`${deviceWidth*0.102}px`}}>
                      {theboolean ? <button id="cfirmbtn" class="button-38" onClick={(e) => {e.preventDefault(); cfirmClcik();}}>Confirm</button>: <button id="cfirmbtn" class="button-38" onClick={(e) => {e.preventDefault(); nextClick();}}>Next</button>}
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
  
  export default FormLnchr;






