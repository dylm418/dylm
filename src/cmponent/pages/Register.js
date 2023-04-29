import React, { useState, useRef } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react'
import './Register.css';
import MyComponent from './MyComponent';
import { BrowserRouter, Switch, Route, Link, useHistory, Router, withRouter } from 'react-router-dom';

function Register(props) {
  const onSubmit = false;
  const isLogin = false;
  const labelRef = useRef(null);
  const [term, setTerm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerMode, setRegisterMode] = useState(true);
  const history = useHistory();

  function handleRegisterMode() {
    setRegisterMode(false);
  }

  function handleRegisterMde() {
    setRegisterMode(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email, password, confirmPassword });
  };

  function handleCheckboxChange(event) {
    setTerm(event.target.checked);
  }
  //'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive'  eye
  const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  //width: `${deviceWidth*1}px`, height: `${deviceHeight*0.8725}px`

  function register(){
    console.log(email)
    if(term===false){
      labelRef.current.style.color = '#DC143C';

    }
    if(isEmailAvailable(email)==true && name.length>2 && password==confirmPassword && term === true){
      // Front-end code
      const data = {
        name:name,
        email:email,
        password:password
      };

      fetch('http://localhost:4000/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
      props.history.push('/MyComponent');
    }
  }

  async function login(){
    props.history.push('/MyComponent');
    if(isLogn(email,password)==true){
      //je vais sur une autre page
      props.history.push('/MyComponent');
    }
  }

  function goBack(NavController) {
    NavController.pop();
  }

  function isEmailAvailable(email) {
    return fetch("http://localhost:4000/customers")
      .then(response => response.json())
      .then(data => {
        const user = data.find(item => item.email === email); // Rechercher l'utilisateur avec l'adresse e-mail donnée
        if (!user) {
          // Si l'utilisateur n'existe pas, retourner true
          return true;
        } else {
          // Si l'utilisateur existe, retourner false
          return false;
        }
      })
      .catch(error => {
        console.error(error);
        // En cas d'erreur, retourner false par défaut (pour éviter de bloquer le processus)
        return false;
      });
  }
  
  async function isLogn(email, password) {
    const response = await fetch("http://localhost:4000/customers");
    const data = await response.json();
    const user = data.find(item => item.email === email); // Rechercher l'utilisateur avec l'adresse e-mail donnée
    if (!user) {
      // Si l'utilisateur n'existe pas, retourner false
      return false;
    } else if (user.password !== password) {
      // Si le mot de passe est incorrect, retourner false
      return false;
    } else {
      // Si l'adresse e-mail et le mot de passe sont corrects, retourner true
      return true;
    }
  }
  
  //const history = useHistory();

  function handleClick() {
    history.push('/MyComponent');
  }

  return (
        <div style={{ backgroundColor: "#0b0c09", width: `${deviceWidth*1}px`, height: `${deviceHeight*1}px`, display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                    <div className='page-container' style={{ backgroundColor: "#131416", width: `${deviceWidth*0.95}px`, height: `${deviceHeight*0.8725}px`, borderRadius:'11px'}}>
                        <div className='buttons' style={{margin:"34px", marginBottom:"34px"}}>
                          <button onClick={handleRegisterMde}>Register</button>
                          <button onClick={handleRegisterMode}>Login</button>            
                      </div>


                      <div className="ui form">
                      {registerMode ? (
                        <div className="field">
                          <Icon name='user' size='large'/>
                          <input type="text" id="nom" name="nom" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} style={{backgroundColor:"#131416",color: 'aliceblue'}}/>
                        </div>
                        ) : null}
                        <div className="field">
                          <Icon name='mail' size='large'/>
                          <input autoComplete="off" type="email" id="email" name="email" placeholder="Enter your e-mail" value={email} onChange={(e) => setEmail(e.target.value)} style={{backgroundColor:"#131416",color: 'aliceblue'}}/>
                        </div>
                          <div className="field">
                            <Icon name='eye' size='large'/>
                            <input type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} style={{backgroundColor:"#131416",color: 'aliceblue'}}/>
                          </div>

                          {registerMode ? (
                            <div className="field">
                              <Icon name='eye' size='large'/>
                              <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{backgroundColor:"#131416",color: 'aliceblue'}}/>
                            </div>

                            ) : null}

                      </div>
                      


                      <div className='button' style={{margin:'40px'}}>
                            {registerMode ? (
                            <div>
                              <label ref={labelRef} htmlFor="privacy-policy" style={{color: 'aliceblue'}}>
                                <input type="checkbox" id="privacy-policy" name="privacy-policy" onChange={handleCheckboxChange} />
                                {" I agree to the privacy policy"}
                              </label>
                            </div>

                            ) : null} 
                          {registerMode ? <p className='p' onClick={handleRegisterMode}>Already a member ? Login here</p> :<div><p className='p' onClick={handleRegisterMde}>New user ? Register now</p><p className='p' style={{color: 'aliceblue'}}>Forgot your password ?</p></div> }
                        
                            {registerMode ? <button type="submit" onClick={register}>Register</button>  : <button type="submit" onClick={login}>Login</button>}
                                       
                        </div>



                  </div>
        </div>
  );
}

export default withRouter(Register);