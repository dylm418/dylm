import React, {useState, useMemo} from 'react';

import {separerTab, theIndex, mixedArray, array2D, randomN, genrateKey, incremenTer, toArray, mixed2dArray} from './functionFile';
import Card9 from './Card9';
import Box from './Box';
import Imgbx from './Imgbx';
import { incrementc1, decrementc1, resetc1, incrementc2, decrementc2, resetc2, changeMo, incrementc4, decrementc4, resetc4, chngTrue, chngFalse, changeclId, changeUsr, chngthIdx9, chngthKyFalse, chngthKyTrue, incrementc3, decrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, resetc5, chngflse, chngtrue, incrementc6, decrementc6, resetc6, changeModTo, selectCountr1, selectCountr2, selectCountr3, selectCountr4, selectCountr5, selectCountr6, selectThbl, selectMotr, selectUsRp, selectClId, selectThIdx9, selectKybtn9, selectProcss, selectProcss1, selectProcss2, selectProcss3, selectProcss4, selectCounter5, selectModeTo} from "../counter/counterSlice";
import { useSelector, useDispatch } from 'react-redux';

function Schema(props) {
  const cntrr6 = useSelector(selectCountr6);
  const cntrr4 = useSelector(selectCountr4);
  const keyf = useSelector(selectThbl);
  const dispatch = useDispatch();
  var vlarray = props.array9; //le tableau multidimensionnel
  var dataImage = "";
  var nbAnswer = 0;
  var reponse = "";
  var definition = "";
  var displayImg = "";
  var data2 = "";
  var index9 = 0;
  var dataArray9 = "";

  const compareArrays = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
  };
  console.log(cntrr4);
  if (process.browser) {
    function generArray(){
      var monTab = document.querySelectorAll('textarea');
      var size1 = monTab.length;
      var thTab = [];
      for(var i = 0; i < size1; i++)
      {
        thTab.push(monTab[i].value)
      }
      return thTab;
    }
    data2 = generArray();
  }


  const [keylnch9, stkey9] = useState(false)
  if (cntrr4 == 0 && !keylnch9) {
    //fonction qui va se lancer directement   mixedAr[0][1] back   mixedAr[1][0] front
    index9 = theIndex(vlarray.length)
    dataArray9 = mixed2dArray(vlarray,vlarray.length,index9)
    stkey9(true);
  }

  if (process.browser){
    var dataArray = dataArray9[cntrr4];
    dataImage = dataArray.slice(0,2);
    nbAnswer = dataArray[dataArray.length-1];
    reponse = dataArray.slice(2,nbAnswer+2);
    definition = dataArray.slice(dataArray.indexOf(reponse[reponse.length-1])+1,dataArray.length-1);
    displayImg = dataArray[0];
    data2 = ""; 

  }

  const [keylnch, stkey] = useState(false)
  if (cntrr6 == nbAnswer && !keylnch) {
    //fonction qui va se lancer directement   mixedAr[0][1] back   mixedAr[1][0] front
    var monTab = "";
    if (process.browser) {
      monTab = document.querySelectorAll('textarea');
    }
     
    if(compareArrays(data2,reponse)==true){//la pour incrementer si bon
      //dispatch(incrementc6());
      dispatch(incrementc4());
      console.log("bien-joué")
    }
    else{
      dispatch(resetc4());
      console.log("erreur")
      console.log(data2)
      console.log(reponse)
    }
    dispatch(resetc6());
    stkey(true);
  }

  console.log("erreur")
  console.log(data2)
  console.log(reponse)

 
  return (
    <div>
    <div class="cntnr">
        <form class="form">
        <Imgbx src={displayImg[0]}></Imgbx>

          <div class="inLine">
           {reponse.map((a,index) => <Box name={index} indication={index+1}></Box>)}
          </div>
          
          <div class="cardContainer">
          {reponse.map((a,index) => <Card9 name={reponse[index]} front={definition[index]} back={reponse[index]}></Card9>)}
          </div>
          
        </form> 
        
    </div>
  </div>
  );
}

export default Schema;
