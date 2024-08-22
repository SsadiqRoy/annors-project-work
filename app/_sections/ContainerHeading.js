"use client";

import { useEffect, useState } from "react";
import { useModalCtx } from "../_context/ModalContext";
import { usePathname } from "next/navigation";

export default function ContainerHeading() {
  const { openModal } = useModalCtx();
  const [showVoteBtn, setShowVoteBtn] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const url = pathname.split("/");

    url.length > 2 && setShowVoteBtn(false);
    url.length <= 2 && setShowVoteBtn(true);
  }, [setShowVoteBtn, pathname]);

  return (
    <header className="container-header">
      <a href="https://metamask.io/">
        <img src="/images/meta.png" alt="Meta logo" />
      </a>
      {showVoteBtn && (
        <button className="btn btn-normal btn-blue" onClick={() => openModal()}>
          Vote Now
        </button>
      )}
    </header>
  );
}
