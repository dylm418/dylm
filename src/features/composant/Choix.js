import Link from 'next/link'
import React, {useState, useMemo} from 'react';
import DataPge from './DataPge';
import { useSelector, useDispatch } from 'react-redux';
import { incrementc1, decrementc1, resetc1, incrementc2, decrementc2, resetc2, changeMo, incrementc4, decrementc4, resetc4, chngTrue, chngFalse, changeclId, changeUsr, chngthIdx9, chngthKyFalse, chngthKyTrue, incrementc3, decrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, resetc5, chngflse, chngtrue, incrementc6, decrementc6, resetc6, changeModTo, selectCountr1, selectCountr2, selectCountr3, selectCountr4, selectCountr5, selectCountr6, selectThbl, selectMotr, selectUsRp, selectClId, selectThIdx9, selectKybtn9, selectProcss, selectProcss1, selectProcss2, selectProcss3, selectProcss4, selectCounter5, selectModeTo} from "../counter/counterSlice";
import './Styles.css';



const dbInstance = collection(database, 'userchoice');
var usrr = 
`mettre les données dans cet ordre
image vide
image reponse
reponse dans l'ordre
nombre de réponse
definition dans l'ordre
`;
const data9 = {
  information:["hello", "hello"],
  theboolean:true,
}
function handleUpdate(a,b){
  const examcollref = doc(database,'userchoice', 'gf5bFbcttGR0sBMhFyY6')
  updateDoc(examcollref,{
    choice:a,
    info:b,
  } ).then(response => {
    console.log("updated")
  }).catch(error =>{
    console.log(error.message)
  })
}

function Tmpe(){
  const router = useRouter();
  function wrthis(data){
    console.log(data);
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
          <div class="cardContainer">
          </div>
        </form> 
        
    </div>
  </div>
  );
}

function Choix() {
    if(data9.theboolean==false){
      return(
          <DataPge></DataPge>
      );
    }

    if(data9.theboolean==true){
      return(
        <Tmpe information={data9.information}></Tmpe>
      );
    }
    
  
}

export default Choix;


//
//dispatch(chngTrue())