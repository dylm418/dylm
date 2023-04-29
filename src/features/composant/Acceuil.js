import React, {useState, useMemo} from 'react';
import './Styles.css';


function Acceuil() {


  return (
    <body>
    <div class="container4">
          <form>

            <div className="thContn">
            <button id="nextbtn" class="button-38">Register</button>
            <button id="nextbtn" class="button-38">Login</button>
            <p>Email</p>
              <input class="textarea" data-mousedown="true" id="entrer"></input>
              <p>Password</p>
              <input class="textarea" data-mousedown="true" id="entrer"></input> 
              <button id="nextbtn" class="button-38">Continue</button>
            </div>
            
          </form> 
        
    </div>
  </body>
  );
}

export default Acceuil;