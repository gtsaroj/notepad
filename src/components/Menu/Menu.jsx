import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import "./universal.css";
import { useMenu } from "../../Hooks/MenuContext";




const Menu = ({ note }) => {

  const {menu} = useMenu()

  
  return (
    <li className=" flex items-center gap-[10px] justify-center  py-[6px] px-[10px] rounded-sm text-[white] cursor-pointer hover:bg-gradient-to-r from-[#3b3bbd] to-[#2a4d8d] hover:shadow-md transition-all  ">
      <div
        className={` ${!menu ? "hide " : "unhide "}`}
        onClick={() => {
          navigate(`/list`);
        }}
      >
        Add New File
      </div>

      <InsertDriveFileIcon />
    </li>
  );
};

export default Menu;
