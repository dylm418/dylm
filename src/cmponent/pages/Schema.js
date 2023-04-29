import React, {useState, useMemo} from 'react';
import {separerTab, theIndex, mixedArray, array2D, randomN, genrateKey, incremenTer, toArray, mixed2dArray} from './functionFile';
import Card9 from './Card9';
import Box from './Box';
import Imgbx from './Imgbx';
import {cntr4, cntr6, incrementc6, resetc4, resetc6, incrementc4, chngflse, chngtrue, thbol} from "../store/counterSlice";
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Segment, Button, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function Schema(props) {
  const cntrr6 = useSelector(cntr6);
  const cntrr4 = useSelector(cntr4);
  const keyf = useSelector(thbol);
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
  console.log(vlarray)
  const compareArrays = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
  };
  console.log(cntrr4);
  if (typeof window !== 'undefined') {
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

  if (typeof window !== 'undefined'){
    var dataArray = vlarray;
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
    if (typeof window !== 'undefined') {
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

  const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  return (
    <div style={{ backgroundColor: "#1f1f1f", width: `${deviceWidth}px`, height: `${deviceHeight}px` }}>
        <div style={{ backgroundColor: "#0b0c09", width: `${deviceWidth*1}px`, height: `${deviceHeight*0.05}px`, borderRadius:"11px", marginBottom: `${deviceHeight*0.0125}px`, display:"flex", justifyContent: "space-between" }}>
                {<p style={{ color: "aliceblue", padding:8 }}>0/20</p>}
                {<p style={{ color: "aliceblue", padding:8 }}>00:00</p>}
        </div>
        
        <div style={{ backgroundColor: "#0b0c09", width: `${deviceWidth*1}px`, height: `${deviceHeight*0.8725}px`, borderRadius:"11px", marginBottom: `${deviceHeight*0.0125}px`, overflow:'auto' }}>
            <div style={{height:'40%', width:'100%',display:'flex', justifyContent:'center', alignItems:'center', marginBottom:9}}>
                  <img src={"https://cdn.pixabay.com/photo/2023/03/22/11/07/seeds-7869190_960_720.jpg"} style={{width: `${deviceWidth*1}px`, height: `${deviceHeight*0.31}px`, borderRadius:"11px", marginRight:17, marginLeft:17}}></img>
            </div>
                <div style={{display:"flex", flexWrap:"wrap", justifyContent:'center', gap:4}}>
                    {reponse.map((a,index) => <Box name={index} indication={index+1}></Box>)}
                </div>
                <div class="cardContainer" style={{display:'flex', gap:8}}>
                    {reponse.map((a,index) => <Card9 name={reponse[index]} front={definition[index]} back={reponse[index]}></Card9>)}
                </div>

                <div style={{margin:20}}>
                  <button>confirm</button>
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

export default Schema;
