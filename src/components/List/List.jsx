import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import SaveIcon from "@mui/icons-material/Save";
import { useNodePad } from "../../Hooks/NodePadContext";
import { Link, useParams } from "react-router-dom";

const List = ({ note }) => {
  const [value, setValue] = React.useState("");
  const [title, setTitle] = useState("Saroj GT");
  const { createNote, deleteNote, editNote } = useNodePad();
  const [isEditable, setIsEditable] = useState(false);

  const a = useParams()
  console.log(a)

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "strike", "italic", "underline", "blockquote"],
      [{ color: [] }],
    ],
  };

  const save = () => {
    createNote({ title: title, note: value });
  };

  const id = useParams();
  console.log(id)


  return (
    <Link to={`list/${note.id}`} className="flex flex-col gap-[100px]  w-full mx-[10px] py-[30px] bg-[#315470] px-[50px] rounded-sm">
          
      <div className=" flex flex-col items-center gap-[10px]  ">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[400px] outline-none focus:border-b-[2px] py-[7px] px-[5px] bg-[#315470]  overflow-hidden h-[30px] text-[30px]"
          readOnly={!isEditable}
        />
        <h3 className="flex flex-col items-end w-full">Date: 2023-02-34</h3>
      </div>

      <div className="border-[1px] rounded-sm mx-[10px] ">
        <div className="flex gap-[25px] w-full  justify-end ml-[-1rem]">
          <button>
            <DeleteIcon />
          </button>
          <button
            onClick={() => {
              const editOn = setIsEditable(!isEditable);
              if (editOn) {
                () => {
                  editNote(note.id, {
                    ...note,
                    title: title,
                    note: value,
                  });
                };
                setTitle(" ")
              }
            }}
          >
            {isEditable ? <SaveIcon /> : <EditIcon />}
          </button>
          <button onClick={save}>
            <DynamicFeedIcon />
          </button>
        </div>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className=" overflow-hidden h-[50vh] bg-[white]"
          modules={modules}
          readOnly={!isEditable}
        />
      </div>
      </Link>
  );
};

export default List;
