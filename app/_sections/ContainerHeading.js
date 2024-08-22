"use client";

import { useModalCtx } from "../_context/ModalContext";

export default function ContainerHeading() {
  const { openModal } = useModalCtx();

  return (
    <header className="container-header">
      <a href="">
        <img src="/images/meta.png" alt="Meta logo" />
      </a>
      <button className="btn btn-normal btn-blue" onClick={() => openModal()}>
        Vote Now
      </button>
    </header>
  );
}
