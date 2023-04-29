import React from 'react';

const Newte = () => {
  console.log("hello");
  return (
    <div>
      <video width="640" height="360" controls>
        <source src="https://vimeo.com/243556536" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos HTML5.
      </video>
    </div>
  );
}

export default Newte;
