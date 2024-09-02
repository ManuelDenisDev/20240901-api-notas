import { useState } from "react";
import { ModalContext } from "../Context/ModalContext";
import { Note } from "../interfaces";

type Props = {
    children: React.ReactNode;
  };

export default function ModalProvider({ children }: Props){

    const [noteToEdit, setNoteToEdit] = useState<Note | null>(null);
  const [createNoteModalOpen, setCreateNoteModalOpen] = useState(false);

  function showCreateNoteModal() {
    setCreateNoteModalOpen(true);
  }

  function closeCreateNoteModal() {
    setCreateNoteModalOpen(false);
  }

  function setNoteToEditInModal(note: Note | null) {
    setNoteToEdit(note);
  }

    return(
        <ModalContext.Provider
        value={{
          noteToEdit,
          createNoteModalOpen,
          showCreateNoteModal,
          closeCreateNoteModal,
          setNoteToEditInModal,
        }}
      >
        {children}
      </ModalContext.Provider>
    )
}