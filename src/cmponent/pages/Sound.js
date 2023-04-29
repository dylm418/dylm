import React from 'react';
export default function Sound(props) {

  function play() {
    var audio = document.getElementById('a1');
    audio.play();
  }
  setTimeout(()=>{
    play();
  },350)

  //props.thurl = "https://stockagefr.com/v8LCrTl6F8PsoPoX/fraudio/1.mp3"
  return (        
    <div>
              <audio controls id='a1'>
                    <source src="https://stockagefr.com/v8LCrTl6F8PsoPoX/fraudio/1.mp3" type='audio/mpeg' />
              </audio>
    </div>

  )
}
