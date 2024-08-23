// import { MdHowToVote } from "react-icons/gi";

import ModalContext from "../_context/ModalContext";
import { auth } from "../_lib/auth";
import ContainerHeading from "../_sections/ContainerHeading";
import Modal from "../_sections/Modal";
import Sidebar from "../_sections/Sidebar";
import VotingForm from "../_sections/VotingForm";

export default async function Home({ children }) {
  const session = await auth();

  return (
    <>
      <div className="layout">
        <ModalContext>
          <Sidebar />

          <main className="container">
            <ContainerHeading user={session.user} />
            <div className="container-content">{children}</div>
          </main>

          <Modal title="SRC elections">
            <VotingForm />
          </Modal>
        </ModalContext>
      </div>
    </>
  );
}
