import React, {useState, useMemo} from 'react';
import { incrementc1, decrementc1, resetc1, incrementc2, decrementc2, resetc2, changeMo, incrementc4, decrementc4, resetc4, chngTrue, chngFalse, changeclId, changeUsr, chngthIdx9, chngthKyFalse, chngthKyTrue, incrementc3, decrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, resetc5, chngflse, chngtrue, incrementc6, decrementc6, resetc6, changeModTo, selectCountr1, selectCountr2, selectCountr3, selectCountr4, selectCountr5, selectCountr6, selectThbl, selectMotr, selectUsRp, selectClId, selectThIdx9, selectKybtn9, selectProcss, selectProcss1, selectProcss2, selectProcss3, selectProcss4, selectCounter5, selectModeTo} from "../counter/counterSlice";
import { useSelector, useDispatch } from 'react-redux';

function Motmls(props) {

    const dispatch = useDispatch();
    const mo = useSelector(selectMotr);
    const mode = useSelector(selectModeTo);
    const thrp = useSelector(selectThIdx9);
    const thsz = useSelector(selectUsRp);
    const counter2 = useSelector(selectCountr1);
    const counterz = props.counterz;
    var thvlue = 0;
    function thTest(){
            //document.getElementById(props.name).style.background="linear-gradient(#594b74, #975c99)";
            setTimeout(() => {
                document.getElementById(thrp).style.background="#8ca46c";
              }, 2000);    
    }
    function initialValue(){
        document.getElementById(props.name).style.background="linear-gradient(#594b74, #975c99)";
        for(let e = 0; e < thsz; e++){
            document.getElementById(e).style.background="linear-gradient(#594b74, #975c99)";
            setTimeout(()=>{lunch4(e);},400);
            lunch8(e);
        }
        dispatch(incrementc4());
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
    function lunch(){
      var element9 = document.getElementById(props.name);
      element9.style.transform = `scale(0,1)`;
    }

    function lunch8(ee){
        var element9 = document.getElementById(ee);
        element9.style.transform = `scale(0,1)`;
    }
    function stp(e) {
      document.getElementById(props.name).className = e;
    }
    function lunch1(){
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
                document.getElementById(e).style.background="linear-gradient(#594b74, #975c99)";
                lunch4(e);
            } 
        }
    }, [counterz]);
    
    dispatch(chngProcss(thvlue));
    return (
      <div className="body94">
        <div style={{"background": "linear-gradient(#594b74, #975c99)", "width": "110px", "height":"40px", "borderRadius":"4px", "opacity":" 0.5", "transition":"0.5s", "display": "flex", "justifyContent": "center", "alignItems": "center", "cursor": "pointer"}} id={props.name} onClick={handleKeyDown}>
          <p>{props.txt}</p>
        </div>
      </div>
    );
  }
  
  export default Motmls;