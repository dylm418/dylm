import React, {useState, useEffect} from 'react';
import {toArray} from './functionFile.js';
import items from "./items.json";
//import fsPromises from 'fs/promises';
//import fs from 'fs'
import path from 'path'
import './Styles.css';


export default function DataPge() {
  return (
    <body>
    <div class="container4">
          <form>
            <div className="thContn">
              <textarea class="textarea" placeholder='hello' data-mousedown="true" id="entrer"></textarea>
              <textarea class="textarea" placeholder="output" data-mousedown="true" id="sortie"></textarea> 
              <textarea class="textarea" placeholder="mode" data-mousedown="true" id="mode" readOnly={true}>{listItems}</textarea>
              <textarea class="textarea" placeholder='hello' data-mousedown="true" id="carte"></textarea> 
            </div>
          </form> 
          <div class="disposition">
            <button id="nextbtn" class="button-38" onClick={toArray}>convert</button>
          </div>
        
    </div>
  </body>
  );
}

