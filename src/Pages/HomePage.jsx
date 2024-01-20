import React, { useState } from "react";
import { NodePadProvider } from "../Hooks/NodePadContext";
import List from "../components/List/List";
import MenuIcon from "@mui/icons-material/Menu";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Menu from "../components/Menu/Menu";
import { useMenu } from "../Hooks/MenuContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { menu, setMenu } = useMenu();
  const [notes, setNotes] = useState([]);

  var date = new Date();
  let Year = date.getFullYear();
  let Month = date.getMonth() + 1;
  let day = date.getDay();
  let FullDate = `${Year} - ${Month < 10 ? 0 : "" + Month} - ${day}`;

  const createNote = (note) => {
    setNotes((prev) => [{ id: Date.now(), ...note, Date: FullDate }, ...prev]);
  };

  const editNote = (note, id, title) => {
    setNotes((prev) =>
      prev.map((prevNote) =>
        prevNote.id === id
          ? { ...prevNote, note: note, title: title }
          : prevNote
      )
    );
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((prevNode) => prevNode.id !== id));
  };

  const navigate = useNavigate();
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
            <>
              <div className="  bg-gradient-to-r from-primary_color to-info_color overflow-hidden overflow-y-auto">
                <button onClick={() => setMenu(!menu)}>
                  <MenuIcon />
                </button>

                <ul className="flex flex-col gap-[30px]  h-[570px] items-stretch p-[10px] ]">
                  <Menu />
                </ul>
              </div>
            </>
          </div>
          <div className="flex w-full ">
            {notes?.map((note) => (
              <List note={note} key={note.id} />
            ))}
          </div>
        </div>
      </div>
    </NodePadProvider>
  );
};

export default HomePage;
