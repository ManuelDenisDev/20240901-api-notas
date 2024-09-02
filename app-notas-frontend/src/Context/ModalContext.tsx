import { createContext } from "react";
import { ModalContextType } from "../interfaces";

export const ModalContext = createContext<ModalContextType>({
    noteToEdit: null,
    createNoteModalOpen: false,
    showCreateNoteModal: () => {},
    closeCreateNoteModal: () => {},
    setNoteToEditInModal: () => {},
  });