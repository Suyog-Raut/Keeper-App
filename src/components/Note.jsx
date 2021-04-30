import React from "react";

function Note(props) {
  function handleClick() {
    props.deleteIt(props.id);
  }
  return (
    <div className="note">
      <h1>{props.addTitle}</h1>
      <p>{props.addContent}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
