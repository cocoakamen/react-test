import React from "react";


export default function Modal(props) {
  const closeModal = function() {
    props.setShow(false)
  }

  if(props.show) {
    return (
      <div class="app-modal-overlay" onClick={closeModal} >
        <div class="app-modal-content-area" onClick={(e) => e.stopPropagation()}>
          <div class="app-modal-header">
            <div className="app-modal-close right-align">
              <i onClick={closeModal} className="small material-icons">close</i>
            </div>
          </div>

        <div class="app-modal-content">
          <p>modalです</p>
          <p>modalです</p>
          <p>modalです</p>
          <p>modalです</p>
          <p>modalです</p>
          <p>modalです</p>
        </div>

       </div>
      </div>
    );  
  } else {
    return null;
  }
};