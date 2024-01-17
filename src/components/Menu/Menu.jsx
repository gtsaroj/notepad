import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import "./universal.css"
import { useNodePad } from "../../Hooks/NodePadContext";
import { NodePadProvider } from "../../Hooks/NodePadContext";

const Menu = () => {
  const [menu, setMenu] = useState(false);
  

  const { notes, deleteNote, editNote } = useNodePad();

  console.log(notes)
  


  return (
    <NodePadProvider value={{notes}}>
          <div className="  bg-gradient-to-r from-primary_color to-info_color">
      <button onClick={() => setMenu(!menu)}>
        <MenuIcon />
      </button>

      <ul className="flex flex-col gap-[30px]  h-[570px] items-stretch p-[10px] ]">
        <li className=" flex items-center gap-[10px] justify-center  py-[6px] px-[10px] rounded-sm text-[white] cursor-pointer hover:bg-gradient-to-r from-[#3b3bbd] to-[#2a4d8d] hover:shadow-md transition-all  ">
          <div className={` ${!menu  ? "hide " : "unhide "}`}>New File</div>

          <InsertDriveFileIcon />
        </li>
        <li className=" flex items-center gap-[10px] justify-center  py-[6px] px-[10px] rounded-sm text-[white] cursor-pointer hover:bg-gradient-to-r from-[#3b3bbd] to-[#2a4d8d] hover:shadow-md transition-all  ">
            <div className={` ${!menu ? "hide " : "unhide "}`}>{}</div>

          <InsertDriveFileIcon />
        </li>

 
      </ul>
    </div>
</NodePadProvider>
  );
};

export default Menu;
