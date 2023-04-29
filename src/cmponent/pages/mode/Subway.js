import React, { useEffect, useRef, useMemo, useState } from 'react';
import {separerTab, theIndex, mixedArray, array2D, randomN, genrateKey} from '../functionFile';
import { useSelector, useDispatch } from 'react-redux';
import {cntr1, cntr2, cntr3, cntr4, tbol, incrementc1, resetc1, incrementc2, resetc2, lmot, incrementc4, chngTrue, chngFalse, changeclId, tId9, changeUsr, usRep, chngthIdx9, tindx9, kybtn9, chngthKyFalse, chngthKyTrue, incrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, counter5, counter5k, cntr5, resetc5} from "../../store/counterSlice";
import { Grid, Segment, Button, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import DraggableObject from '../DraggableObject';
import './Text.css'


function Subway(props) {

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
      dispatch(incrementc1())
      dispatch(resetc2())       //fonction qui va se lancer directement
     setFunctionExecuted(true)
  }

  
  const mixedAr = useMemo(() => { {/* se qui doit-être afficher à l'écran */} // placer le signal pour savoir quand melanger
  var un = array2D(4)
  un[0]=mixedArray(separerTab(props.cb,thsize,data.textFront2)[counter1],separerTab(8,thsize,data.textFront2)[counter1].length,theIndx2)
  un[1]=mixedArray(separerTab(props.cb,thsize,data.textBack2)[counter1],separerTab(8,thsize,data.textBack2)[counter1].length,theIndx2)

  return un
  }, [counter1,counter4]);

  var reponse;

const thRep = useMemo(() => {
  dispatch(chngthIdx9(mixedAr[0].indexOf(value9[counter2])));
  dispatch(changeUsr(value9[counter2]));
}, [counter2]);

const [cardWidth, setCardWidth] = useState(0);
const [cardHeight, setCardHeight] = useState(0);

const intervalId = useRef(null);
const shuffledArray = mixedAr[1].slice().sort(() => Math.random() - 0.5);
console.log(shuffledArray)

function collision(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  return !(
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.left > rect2.right
  );
}

useEffect(() => {
  function createObject(name, index) {
    const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    const object = document.createElement("div");
    object.id = `object-${index}`; // utilisez un ID unique pour chaque objet
    const p = document.createElement("p");
    p.textContent = name;
    object.appendChild(p);

    const width = 90;
    const height = 45;
    object.setAttribute('style', `width: ${width}px; height: ${height}px; display: flex; justify-content: center; align-items: center; position: absolute; border-radius: 11px; background-color: chocolate;`);

    const container = document.getElementById("page-containers");
    if (!container) return;
    const x = Math.floor(Math.random() * (container.offsetWidth - 100));
    object.style.left = x + "px";

    container.appendChild(object);

    const y = window.innerHeight;
    const topOffset = y * 0.001;
    const animation = object.animate(
      [
        { transform: "translateY(-" + (y + topOffset) + "px)" },
        { transform: "translateY(" + (y - topOffset) + "px)" }
      ],
      { duration: 5000 }
    );

    animation.onfinish = function() {
      container.removeChild(object);
    };

    object.addEventListener("click", () => {
      // vérifiez si l'objet cliqué correspond à l'élément actuel de shuffledArray
      if (name === shuffledArray[counter3]) {
        dispatch(incrementc2());
      } else {
        dispatch(chngFalse());
        dispatch(incrementc4());
      }
    });

    dispatch(incrementc3());
    if (counter3 === shuffledArray.length - 1) {
      dispatch(resetc3());
    }

    // Vérifiez la collision avec l'objet en mouvement
    const move = document.getElementById(`thobject`);
    if (move) {
      const intervalId = setInterval(() => {
        const item = document.getElementById(`object-${index}`);
        if (item && collision(item, move)) {
          clearInterval(intervalId);
          window.alert("Collision détectée !");//ici que l'on détecter une collision avec un objet
        }
      }, 50);
    }
  }

  intervalId.current = setInterval(() => {
    if (counter3 < shuffledArray.length) {
      createObject(shuffledArray[counter3], counter3);
    }
  }, 1000);

  return () => clearInterval(intervalId.current);
}, [counter3, dispatch]);


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



// Appeler la fonction de détection de collision toutes les 100 millisecondes
//setInterval(detectCollision, 100);

  
  return (
    <div style={{ backgroundColor: "#1f1f1f", width: `${deviceWidth}px`, height: `${deviceHeight}px` }}>
        <div style={{ backgroundColor: "#0b0c09", width: `${deviceWidth*1}px`, height: `${deviceHeight*0.05}px`, borderRadius:"11px", marginBottom: `${deviceHeight*0.0125}px`, display:"flex", justifyContent: "space-between" }}>
                {<p style={{ color: "aliceblue", padding:8 }}>{counter2}/{value9.length}</p>}
                {theboolean ? <p style={{ color: "aliceblue", padding:8 }}>{value9[counter2]}:</p>: <p style={{ color: "aliceblue", padding:8 }}>{value9[counter2]}:{value[counter2]}</p>}
        </div>
        
        <div  id="page-containers"  style={{ backgroundColor: "#0b0c09", width: `${deviceWidth*1}px`, height: `${deviceHeight*0.8725}px`, borderRadius:"11px", marginBottom: `${deviceHeight*0.0125}px`, overflow: "hidden", position:"relative"}}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <DraggableObject thid={"thobject"}></DraggableObject>
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

export default Subway;





