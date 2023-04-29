import React, {useState, useMemo} from 'react';
import {incrementc4, resetc1, resetc2} from "../store/counterSlice";
import { useSelector, useDispatch } from 'react-redux';
import './Styles.css';

function Modal(props) {
    const dispatch = useDispatch();
    function reply(){
        dispatch(resetc1());
        dispatch(resetc2());
        dispatch(incrementc4())
    }
 return (
 <div class="modal">
  <img src="https://media.discordapp.net/attachments/639324278684123136/1032436354895843348/kisspng-customer-review-5-star-stock-photography-5-stars-5b229bc91c5d35.4342468915289947611162.png" width="100" height="50"></img>
  <p class="message">super mec 20/20</p>
  <div class="options">
    <button class="btn" onClick={reply}>replay</button>
    <button class="btn">exit</button>
  </div>
 </div>
    );
  }
  

export default Modal;

//document.getElementByID("felt").click();