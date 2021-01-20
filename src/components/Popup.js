import React from "react";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div
        className="box"
        style={{ backgroundColor: "rgb(43 184 215)", color: "#fff" }}
      >
        <span className="close-icon" onClick={props.handleClose}>
          <i className="fas fa-times"></i>
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
