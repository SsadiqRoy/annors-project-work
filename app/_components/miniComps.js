"use client";

import { usePathname } from "next/navigation";
import { useFormStatus } from "react-dom";

export function ButtonFull({ text }) {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="btn btn-full btn-green">
      {pending ? "..." : text}
    </button>
  );
}

export function SidebarLink({ children, match }) {
  const pathname = usePathname();
  const active = pathname === match;

  return <span className={active ? "sidebar-menu-item-active" : ""}>{children}</span>;
}
