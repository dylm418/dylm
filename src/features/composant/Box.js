import React, {useState, useMemo} from 'react';
import './Styles.css';

function Box(props) {
  return (
    <div>
      <textarea class="boxText" id={props.name} placeholder={props.indication}></textarea>
    </div>
  );
}

export default Box;
