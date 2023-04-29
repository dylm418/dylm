import React from 'react';
import { Grid, Segment, Button, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Getstarted.css'
import axios from "axios";
import Register from './Register';
import { BrowserRouter, Switch, Route, Link, useHistory, Router, withRouter } from 'react-router-dom';

const Getstarted = (props) => {
  const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  fetch("http://localhost:4000/customers")
  .then(response => response.json())
  .then(data => {
    console.log(data); // afficher les données récupérées dans la console
    // faire quelque chose avec les données, par exemple les afficher dans votre page web
  })
  .catch(error => console.error(error));


  function changePg(){
    props.history.push('/Register');
  }


  return (
  <div style={{ backgroundColor: "#1f1f1f", display: "grid", width: `${deviceWidth}px`, height: `${deviceHeight}px` }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
      <div style={{ display:"flex", height:"40px", width:"80px" }}>
        <h2>L'<span style={{color:"#5F9191"}}>apprentissage</span> est au cœur de notre développement</h2>
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img style={{ height: "220px", width: "220px" }} src="https://bit.ly/3NpsoLg"></img>
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div>
        <button onClick={changePg} style={{ backgroundColor: "#5F9191", color: "alice", borderRadius: "5px" }}><span style={{color: "alice"}}>Get started</span></button>
      </div>
    </div>
  </div>
  );
}

export default withRouter(Getstarted);
