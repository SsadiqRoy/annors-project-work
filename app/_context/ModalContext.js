"use client";

const { createContext, useState, useContext } = require("react");

const Contenxt = createContext();

export default function ModalContext({ children }) {
  const [open, setOpen] = useState(false);

  const values = {
    isOpen: open,
    openModal: () => setOpen(true),
    closeModal: () => setOpen(false),
  };

  return <Contenxt.Provider value={values}>{children}</Contenxt.Provider>;
}

export function useModalCtx() {
  const context = useContext(Contenxt);
  if (!context) throw new Error("useModalCtx is called outside ModalContext");

  return context;
}
