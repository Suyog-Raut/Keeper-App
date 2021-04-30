import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [itemArray, setItemArray] = useState([]);

  function addArray(input) {
    setItemArray((prevValue) => {
      return [...prevValue, input];
    });
  }

  function deleteItem(id) {
    setItemArray((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={addArray} />
      {itemArray.map((item, index) => (
        <Note
          addTitle={item.title}
          addContent={item.content}
          key={index}
          id={index}
          deleteIt={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
