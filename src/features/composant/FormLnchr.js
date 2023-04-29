import React, {useState, useMemo} from 'react';
import Form from "./Form";
import Modal from "./Modal";
import progressBar from './progressBar';
import {separerTab, theIndex, mixedArray, array2D, randomN, genrateKey, incremenTer} from './functionFile';
import { useSelector, useDispatch } from 'react-redux';
import { incrementc1, decrementc1, resetc1, incrementc2, decrementc2, resetc2, changeMo, incrementc4, decrementc4, resetc4, chngTrue, chngFalse, changeclId, changeUsr, chngthIdx9, chngthKyFalse, chngthKyTrue, incrementc3, decrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, resetc5, chngflse, chngtrue, incrementc6, decrementc6, resetc6, changeModTo, selectCountr1, selectCountr2, selectCountr3, selectCountr4, selectCountr5, selectCountr6, selectThbl, selectMotr, selectUsRp, selectClId, selectThIdx9, selectKybtn9, selectProcss, selectProcss1, selectProcss2, selectProcss3, selectProcss4, selectCounter5, selectModeTo} from "../counter/counterSlice";
import './Styles.css';

function FormLnchr(props) {
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
    return (

    <div className='container4'>
            <div class="cntnr">
              <progress id="file" max={data.textBack2.length} value={counter5}>100%</progress>
            </div>
            <div className="thbtn">
            {<p>{value9[counter2]}:</p>}
            {<p>{counter5}/{data.textBack2.length}</p>}
            {<p>{y}/{20}</p>}
            </div>
            <div style={{"display": "flex","flexWrap":"wrap"}}> 
                {value9.map((a,index) => <Form question={value9[index]} name={index}></Form>)}   
            </div>
            {theboolean ? <button id="cfirmbtn" class="button-38" onClick={(e) => {e.preventDefault(); cfirmClcik();}}>Confirm</button>: <button id="cfirmbtn" class="button-38" onClick={(e) => {e.preventDefault(); nextClick();}}>Next</button>}
    </div>
    );
  }
  
  export default FormLnchr;