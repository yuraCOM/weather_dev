import React from "react";
import "./mymodal.css";
import Todo from '../Todo'

const MyModal = (props) => {
  return (
    <div className={props.activeModal ? "mymodal " : "mymodal close"} onClick={() => props.setActiveModal(false)}>
      <div className="mymodal-body" onClick={(e) => e.stopPropagation()}>

        <button type="button" className="btn btn-danger btnModalClose" onClick={() => props.setActiveModal(false)}>x</button>

        <Todo props={{ ...props }}></Todo>
        <button type="button" className="btn btn-danger " onClick={() => props.setActiveModal(false)}>Close</button>
      </div>
    </div>
  )
}

export default MyModal
