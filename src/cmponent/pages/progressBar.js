import React, {useState, useMemo} from 'react';
import './Styles.css';

function progressBar() {

    function getCurentprc(tablen,current){
        var rslts = current*100/tablen;
        return rslts;
    }
      
    function trsnlatToPx(tablen,current){
       var th = getCurentprc(tablen,current) 
       var thprc = 400*th/100;
       return thprc;
    }
 return (
<div class="thcontainer">
    <div class="thvalue">
      40%
    </div>
</div>
    );
}
  

export default progressBar;

//document.getElementByID("felt").click();