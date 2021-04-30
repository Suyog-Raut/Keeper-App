import React, { useState } from "react";

function CreateArea(props) {
  const [item, setItem] = useState({
    title: "",
    content: ""
  });

  function addItem(event) {
    const { name, value } = event.target;
    setItem((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function addNote(event) {
    props.add(item);

    event.preventDefault();
    setItem({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={addItem}
          name="title"
          placeholder="Title"
          value={item.title}
        />
        <textarea
          onChange={addItem}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={item.content}
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
