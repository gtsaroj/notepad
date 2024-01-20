import { useContext, createContext } from "react";

const NodePadContext = createContext({
  notes: [
    {
      id: 1,
      title: "Welcome to Nodepad!",
      Date: 2020 - 5 - 20,
      note: `This is a simple text editor built with Node.js and Express.`,
    },
  ],

  createNote: (id, note) => {},
  editNote: (id, note) => {},
  deleteNote: (id) => {},
});

export const useNodePad = () => {
  return useContext(NodePadContext);
};

export const NodePadProvider = NodePadContext.Provider;
