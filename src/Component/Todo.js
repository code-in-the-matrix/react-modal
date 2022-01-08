import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className="card">
      
      <div className="item">{props.text}</div>
      
        <button className="btn" onClick={showModalHandler}>
          Delete
        </button>
      
      {showModal ? <Modal text="Are you sure?" onClose = {closeModalHandler} /> : null} 
      {/* similiar to the if condition */}
      {showModal && <Backdrop onCancel={closeModalHandler} />}
      {/* shorthand for the above expression */}
      {/* JS takes the value of the second expression in cases like a && b */}
      
    </div>
  );
}
export default Todo;
