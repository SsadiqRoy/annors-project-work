"use client";

import { useState } from "react";
import { MdHowToVote } from "react-icons/md";

export default function InnerMenu({ children, title }) {
  const [openList, setOpenList] = useState(false);

  return (
    <ul className={`sidebar-menu-inner ${openList && "sidebar-menu-inner--open"}`}>
      <li className="sidebar-menu-item" onClick={() => setOpenList((s) => !s)}>
        <a>
          <span className="sidebar-menu-item-icon">
            <MdHowToVote />
          </span>
          <span className="sidebar-menu-item-text">{title}</span>
        </a>
      </li>
      {children}
    </ul>
  );
}
