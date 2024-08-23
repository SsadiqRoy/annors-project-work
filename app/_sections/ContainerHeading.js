"use client";

import { useEffect, useState } from "react";
import { useModalCtx } from "../_context/ModalContext";
import { usePathname } from "next/navigation";

export default function ContainerHeading({ user }) {
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
      <div className="container-header-left">
        <strong>
          {user.name} &mdash; {user.studentId}
        </strong>
      </div>

      <div className="container-header-right">
        <a href="https://metamask.io/">
          <img src="/images/meta.png" alt="Meta logo" />
        </a>
        {showVoteBtn && (
          <button className="btn btn-normal btn-blue" onClick={() => openModal()}>
            Vote Now
          </button>
        )}
      </div>
    </header>
  );
}
