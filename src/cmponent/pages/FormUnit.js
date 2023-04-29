import React from 'react';

const FormUnit = (props) => {
  const boolean = props.boll;
  const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
      <textarea rows="9" cols="90" style={{ order: 1,resize:"none", width: `${deviceWidth*0.29}px`, height: `${deviceHeight*0.04}px`, overflow:'auto', borderRadius:7 }} placeholder="...." value={props.question} readonly="readonly"></textarea>
      {boolean && (
        <img
          src={props.urlss}
          alt="placeholder"
          style={{ order: 2 , width: `${deviceWidth*0.29}px`, height: `${deviceHeight*0.1}px`, borderRadius:7, marginTop:4 }}
        />
      )}
      <textarea rows="9" cols="90" style={{ order: 3,resize:"none", width: `${deviceWidth*0.29}px`, height: `${deviceHeight*0.04}px`, overflow:"auto", borderRadius:7, marginTop:4  }} placeholder="...." value={props.reponse} id={props.name} autocomplete="off"></textarea>
    </div>
  );
};

export default FormUnit;






