import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react'
import './Register.css';

function Contact() {
  const onSubmit = false;
  const isLogin = false;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [registerMode, setRegisterMode] = useState(true);

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
  //'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive'  eye
  return (
    <div className="auth-form">
        <div style={{margin:"34px", marginBottom:"34px"}}>
            <button onClick={handleRegisterMode}>Contact US</button>            
        </div>

      <form className="ui form">
        <div className="field">
          <Icon name='user' size='large'/>
          <input type="text" id="nom" name="nom" placeholder="Enter your name" value={email} onChange={(e) => setEmail(e.target.value)} style={{backgroundColor:"#131416"}}/>
        </div>
        
        <div className="field">
          <Icon name='mail' size='large'/>
          <input type="email" id="email" name="email" placeholder="Enter your e-mail" value={password} onChange={(e) => setPassword(e.target.value)} style={{backgroundColor:"#131416"}}/>
        </div>
          <div className="field">
            <Icon name='phone' size='large'/>
            <input type="number" id="object" name="object" placeholder="Phone number" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{backgroundColor:"#131416"}}/>
          </div>

            <div className="field">
                <Icon name='chat' size='large'/>
                <input type="text" id="text" name="text" placeholder="Message" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{backgroundColor:"#131416"}}/>
            </div>
            
      </form>
      <div style={{margin:'40px'}}>
        <button type="submit">Send</button>            
        </div>
    </div>
  );
}


export default Contact;