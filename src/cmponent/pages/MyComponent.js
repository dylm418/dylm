import React from 'react';
import { Grid, Segment, Button, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Mycompo.css'
import "./styl.css";
import axios from "axios";


const MyComponent = () => {
  const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  fetch("http://localhost:4000/customers")
  .then(response => response.json())
  .then(data => {
    console.log(data); // afficher les données récupérées dans la console
    // faire quelque chose avec les données, par exemple les afficher dans votre page web
  })
  .catch(error => console.error(error));


  return (
    <div style={{ backgroundColor: "#1f1f1f", width: `${deviceWidth}px`, height: `${deviceHeight}px` }}>
        <div style={{ backgroundColor: "#0b0c09", width: `${deviceWidth*1}px`, height: `${deviceHeight*0.05}px`, borderRadius:"11px", marginBottom: `${deviceHeight*0.0125}px`, display:"flex", alignItems:"center" }}>
            <Icon name='circle user' size='large' style={{margin:"5px",color: "aliceblue"}}/>
        </div>
        
        <div style={{ backgroundColor: "#0b0c09", width: `${deviceWidth*1}px`, height: `${deviceHeight*0.8725}px`, borderRadius:"11px", marginBottom: `${deviceHeight*0.0125}px`, overflow:'auto' }}>
          
          <div className="grid">
            <div className="item item-left" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <p>Continuer</p>
            </div>
            <div className="item item-right">
              <div className="content">
              <ul>
                <li>Tâche1</li>
                <li>Tâche2</li>
                <li>Tâche3</li>
                <li>Tâche4</li>
                <li>Tâche5</li>
                <li>Tâche6</li>
                <li>Tâche7</li>
              </ul>
              </div>
            </div>
            <div className="item item-right">
              <div className="content">
                  <ul>
                    <li>User1</li>
                    <li>User2</li>
                    <li>User3</li>
                    <li>User4</li>
                    <li>User5</li>
                    <li>User6</li>
                    <li>User7</li>
                </ul>
              </div>
            </div>
          </div>

            <div className="container">
                <p>Leçon</p>
            </div>
            <div className="container">
                <p>Cours privé</p>
            </div>
            <div className="container">
                <p>Tâche</p>
            </div>
            <div className="container">
                <p>Classement</p>
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

export default MyComponent;
