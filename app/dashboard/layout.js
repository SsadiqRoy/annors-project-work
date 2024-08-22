// import { MdHowToVote } from "react-icons/gi";

import ModalContext from "../_context/ModalContext";
import ContainerHeading from "../_sections/ContainerHeading";
import Modal from "../_sections/Modal";
import Sidebar from "../_sections/Sidebar";

export default function Home({ children }) {
  return (
    <>
      <div className="layout">
        <ModalContext>
          <Sidebar />

          <main className="container">
            <ContainerHeading />
            <div className="container-content">{children}</div>
          </main>

          <Modal title="SRC elections" />
        </ModalContext>
      </div>
    </>
  );
}
