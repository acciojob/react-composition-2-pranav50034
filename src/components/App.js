import React, { useState } from "react";
import Modal from "./Modal";
import "./../styles/App.css";

function App() {
   const [showModal, setShowModal] = useState(false);

   const handleShowModal = () => {
      setShowModal(true);
   };

   const handleCloseModal = () => {
      setShowModal(false);
   };

   return (
      <div>
         <button onClick={handleShowModal}>Show Modal</button>
         <Modal show={showModal} onClose={handleCloseModal}>
            <p>This is the content of the modal.</p>
         </Modal>
      </div>
   );
}

export default App;
