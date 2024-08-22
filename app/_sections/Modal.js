"use client";

import { useEffect, useRef } from "react";
import { useModalCtx } from "../_context/ModalContext";
import VotingForm from "./VotingForm";

export default function Modal({ title }) {
  const { isOpen, closeModal } = useModalCtx();
  const modal = useRef();

  useEffect(() => {
    modal.current.addEventListener("click", (e) => {
      const content = e.target.closest(".modal-content");

      if (content) return;

      closeModal();
    });
  });

  useEffect(() => {
    isOpen && (modal.current.style.left = "0");
    !isOpen && (modal.current.style.left = "110%");
  }, [isOpen]);

  return (
    <div className={`modal`} ref={modal}>
      <div className="modal-container">
        <div className="modal-heading">
          <h3>{title}</h3>
        </div>

        <div className="modal-content">
          <VotingForm />
        </div>
      </div>
    </div>
  );
}
