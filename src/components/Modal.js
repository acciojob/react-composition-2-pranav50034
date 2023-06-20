import React from "react";
import "./../styles/App.css";

function Modal({ show, onClose, children }) {
   if (!show) {
      return null;
   }

   return (
      <div className="modal-overlay" onClick={onClose}>
         <div className="modal">
            <button className="modal-close" onClick={onClose}>
               Close
            </button>
            {children}
         </div>
      </div>
   );
}

export default Modal;
