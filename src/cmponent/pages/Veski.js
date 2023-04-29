import React from 'react';
import MyComponent from './MyComponent';
import { withRouter } from 'react-router-dom';

function Veski(props) {
  const handleClick = () => {
    props.history.push('/MyComponent');
  };

  return (
    <div>
      <button onClick={handleClick}>Changer de page</button>
    </div>
  );
}

export default withRouter(Veski);
