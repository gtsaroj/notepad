import React, { useState } from "react";
import { NodePadProvider } from "../Hooks/NodePadContext";
import Menu from "../components/Menu/Menu";
import List from "../components/List/List";

const HomePage = () => {
  const [notes, setNotes] = useState([]);

  var date = new Date();
  let Year = date.getFullYear();
  let Month = date.getMonth() + 1;
  let day = date.getDay();
  let FullDate = `${Year} - ${Month < 10 ? 0 : "" + Month} - ${day}`;

  const createNote = (note) => {
    setNotes((prev) => [{ id: Date.now(), ...note, Date: FullDate }, ...prev]);
  };

  const editNote = (note, id) => {
    setNotes((prev) =>
      prev.map((prevNote) =>
        prevNote.id === id ? { ...prevNote, note: note } : prevNote
      )
    );
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((prevNode) => prevNode.id !== id));
  };

 

  return (
    <NodePadProvider value={{ notes, createNote, deleteNote, editNote }}>
      <div className=" gap-[10px] flex flex-col  bg-mad py-[3px]">
        <h3 className="text-center py-[7px] px-[10px] text-danger_color text-[45px]">
          Todos
        </h3>
        <div
          className="flex 
              flex-row gap-[10px] "
        >
                  <div className="">
                      
            <Menu />
          </div>
          <div className="flex w-full ">
            <List />
          </div>
        </div>
      </div>
    </NodePadProvider>
  );
};

export default HomePage;
