import React from 'react';
import ReactPlayer from 'react-player'

export default function Video(props) {
  const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  setTimeout(() => {
    document.getElementById("myCheck").click();
  }, 900);

  return (
    <div className="sqbox">
      <ReactPlayer
        url="https://vimeo.com/243556536"
        width="100%"
        height="80%"
        playing={true}
        playIcon={<button id="myCheck">Play</button>}
        light="https://cdn.pixabay.com/photo/2018/06/02/08/35/board-3447975_960_720.jpg"
      />
      <p>{props.back}</p>
    </div>
  );
}
