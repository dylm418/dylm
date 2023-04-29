import React, {useState, useMemo} from 'react';
import DataPge from './DataPge';
import { useSelector, useDispatch } from 'react-redux';
import {cntr1, cntr2, cntr3, cntr4, tbol, incrementc1, resetc1, incrementc2, resetc2, lmot, incrementc4, chngTrue, chngFalse, changeclId, tId9, changeUsr, usRep, chngthIdx9, tindx9, kybtn9, chngthKyFalse, chngthKyTrue, incrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, counter5, counter5k, cntr5, resetc5} from "../store/counterSlice";


function Choix() {
  function wrthis(data){
    console.log("hello");
  
  }
  return(
    <div>
    <div class="cntnr">
        <form class="form">
          <div class="inLine">
            
           <button onClick={(e) => {e.preventDefault(); wrthis("Card");}}>Card</button>
           <button onClick={(e) => {e.preventDefault(); wrthis("OneForm");}}>OneForm</button>
           <button onClick={(e) => {e.preventDefault(); wrthis("MultiForm");}}>MultiForm</button>
           <button onClick={(e) => {e.preventDefault(); wrthis("Schema");}}>Schema</button>
           <button onClick={(e) => {e.preventDefault(); wrthis("Slider");}}>Slider</button>
           <button onClick={(e) => {e.preventDefault(); wrthis("Motmls");}}>Motmls</button>
           <button onClick={(e) => {e.preventDefault(); wrthis("Motmls2");}}>Motmls2</button>
          
          </div>
        </form> 
        
    </div>
  </div>
  );
}

export default Choix;


//
//dispatch(chngTrue())



