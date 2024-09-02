import { useContext, useEffect, useState } from "react";
import ApplicationTitle from "./components/ApplicationTitle";
import CardNote from "./components/CardNote";
import CardNoteGrid from "./components/CardNoteGrid";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import { ModalContext } from "./Context/ModalContext";
import { deleteNote, getApiNotes } from "./services";
import { Note } from "./interfaces";
import CreateNoteModal from "./components/CreateNoteModal";
import EditNoteModal from "./components/EditNoteModal";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    noteToEdit,
    createNoteModalOpen,
    closeCreateNoteModal,
    setNoteToEditInModal,
  } = useContext(ModalContext);

  async function getNotes() {
    const notes = await getApiNotes();
    setNotes(notes);
  }

  function getFilteredNotes() {
    const filteredNotes = notes.filter((note) => {
      return (
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    return filteredNotes;
  }

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filteredNotes = getFilteredNotes();
      setFilteredNotes(filteredNotes);
    }
  }, [searchTerm]);

  async function handleOnCreate() {
    closeCreateNoteModal();
    await getNotes();
  }

  async function handleOnEdit() {
    setNoteToEditInModal(null);
    await getNotes();
  }

  function handleOnEditNote(note: Note) {
    setNoteToEditInModal(note);
  }

  async function handleOnRemoveNote(id: string) {
    try {
      await deleteNote(id);
      await getNotes();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col gap-10">
      <ApplicationTitle />
      <SearchInput onSearch={(value: string) => setSearchTerm(value)} />
      <Header />
      <CardNoteGrid>
        {(filteredNotes.length > 0 && searchTerm !== ""
          ? [...filteredNotes]
          : [...notes]
        ).map((note) => (
          <CardNote
            key={note._id}
            title={note.title}
            description={note.description}
            onEdit={() => handleOnEditNote(note)}
            onRemove={() => handleOnRemoveNote(note._id)}
          />
        ))}
      </CardNoteGrid>
      <CreateNoteModal
        isOpen={createNoteModalOpen}
        onClose={closeCreateNoteModal}
        onCreate={handleOnCreate}
      />
      {noteToEdit !== null && (
        <EditNoteModal
          note={noteToEdit}
          isOpen
          onClose={() => setNoteToEditInModal(null)}
          onEdit={handleOnEdit}
        />
      )}
    </div>
  );
}
