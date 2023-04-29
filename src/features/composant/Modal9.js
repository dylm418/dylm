import React, { useState } from "react";

export default function Modal9(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  
  if (process.browser) {
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  }
  


  return (
    <>
      <p onClick={toggleModal} id="btn-modal">
      </p>

      {modal && (
        <div className="modal9">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h3>Error 404😵</h3>
            <p>{props.rep9}</p>
            <button onClick={refreshPage}>
              replay
            </button>
          </div>
        </div>
      )}
    </>
  );
}