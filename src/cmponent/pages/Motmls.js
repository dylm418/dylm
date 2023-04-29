import React, {useState, useMemo} from 'react';
import {tbol, chngTrue, chngFalse, changeMo, changeclId, tId9, changeUsr, usRep, chngthIdx9, tindx9, lmot, incrementc3, resetc2, cntr3, kybtn9, chngthKyTrue, chngthKyFalse, procs, procs1, procs2, procs3, procs4, chngProcss, cntr5, incrementc5, resetc5, lmode, incrementc2, incrementc4, cntr2, cntr1, cntr4} from "../store/counterSlice";
import { useSelector, useDispatch } from 'react-redux';

function Motmls(props) {

    const dispatch = useDispatch();
    const mo = useSelector(lmot);
    const mode = useSelector(lmode);
    const thrp = useSelector(tindx9);
    const thsz = useSelector(usRep);
    const counter1 = useSelector(cntr1);
    const counter4 = useSelector(cntr4);
    const counterz = props.counterz;
    var thvlue = 0;
    function thTest(){//plac e le vert sur la bonne réponse
            //document.getElementById(props.name).style.background="linear-gradient(#594b74, #975c99)";
            setTimeout(() => {
                document.getElementById(thrp).style.background="#8ca46c";
              }, 2000);    
    }
    function initialValue(){//fonction qui permet de remettre les valeurs à l'initiale
        //document.getElementById(props.name).style.background="linear-gradient(#594b74, #975c99)";
        for(let e = 0; e < thsz; e++){
            document.getElementById(e).style.background="chocolate";
            setTimeout(()=>{lunch4(e);},400);
            lunch8(e);
        }
        dispatch(incrementc4());
        dispatch(resetc2());
    }
    function doThs(){
        setTimeout(() => {
            initialValue();
            if(props.nmbr.indexOf(counterz) !== -1)  
            {  
                dispatch(chngProcss(counterz)) 
            }   
            else  
            {  
                dispatch(resetc5());  
            } 

            
        }, 2500);
    }
    const array = props.nmbr;
    console.log(array);
    const handleKeyDown = (e) => {
      if(props.txt==mo &&mode=="mode1"){
        dispatch(incrementc5());
        dispatch(incrementc2());
        lunch();
      }

      if(props.txt!=mo &&mode=="mode1"){
        lunch1();
        if(array.indexOf(counterz) !== -1)  
        {  
            dispatch(chngProcss(counterz)); 
            thvlue = array[array.indexOf(counterz)]
        }else{  
            dispatch(chngProcss(thvlue));
        } 
        document.getElementById(props.name).style.background="#fe002c";
        setTimeout(() => {
            document.getElementById(thrp).style.background="#8ca46c";
          }, 500);
          dispatch(chngFalse()); 
        doThs();
        setTimeout(() => {
          dispatch(chngTrue()); 
        }, 2000);//nombre de seconde pendant que les réponse sont affichés
        //ici
      }


      if(props.txt==mo &&mode=="mode2"){
        dispatch(incrementc5());
        dispatch(incrementc2());
        lunch1();
        document.getElementById(props.name).style.background="#8ca46c";
      }
      if(props.txt!=mo &&mode=="mode2"){
        lunch1();
        document.getElementById(props.name).style.background="#fe002c";
        setTimeout(() => {
           doThs(); 
         }, 5000);
         thTest();
      }
    };
    function lunch(){//fait apparaître l'objet
      var element9 = document.getElementById(props.name);
      element9.style.transform = `scale(0,1)`;
    }

    function lunch8(ee){//fait apparaître l'objet
        var element9 = document.getElementById(ee);
        element9.style.transform = `scale(0,1)`;
    }
    function stp(e) {
      document.getElementById(props.name).className = e;
    }
    function lunch1(){//rotation pour signaler l'erreur ou la bonne réponse
      setTimeout(() => {
         stp("rotate2"); 
      }, 500);
      stp("rotate");
      setTimeout(() => {
          stp("rotate3");
      }, 1000);
    }
    function lunch4(ea){
      var element9 = document.getElementById(ea);
      element9.style.transform = `scale(1,1)`;
    }

    function lunch9(){
        setTimeout(() => {
           stp("rotate4"); 
        }, 400);
      }

      lunch9();
      
      const thRep9 = useMemo(() => {
        if(array.indexOf(counterz) !== -1)  //la que il y'a un problème
        {  
            //thvlue = counterz;
            dispatch(chngProcss(counterz));
            thvlue = array[array.indexOf(counterz)]
            for(let e = 0; e < thsz; e++){
                document.getElementById(e).style.background="chocolate";
                lunch4(e);
            } 
        }
    }, [counterz]);


    //nous avons ajouter les fonctions actulise et thrst pour corriger le problème
    function actulise(){
      document.getElementById(props.name).style.background="chocolate";
      for(let e = 0; e < thsz; e++){
          document.getElementById(e).style.background="chocolate";
          setTimeout(()=>{lunch4(e);},400);//fait disparaître
          lunch8(e);//fait apparaître
      }
    }
    //on peut inverser le huit et le quatre
    const thrst = useMemo(() => {
      setTimeout(()=>{actulise();},800);
    }, [counter1]);

    dispatch(chngProcss(thvlue));
    return (
      <div>
        <div style={{background:"chocolate", width: "110px", height:"40px", borderRadius:"4px", opacity:" 0.5", transition:"0.5s", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}} id={props.name} onClick={handleKeyDown}>
          <p>{props.txt}</p>
        </div>
      </div>
    );
  }
  
  export default Motmls;