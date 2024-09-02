import { useState } from "react";
import Modal from "./common/Modal";
import { editNote } from "../services";
import { Note } from "../interfaces";

type Props = {
  note: Note;
  isOpen: boolean;
  onEdit: () => void;
  onClose: () => void;
};

export default function EditNoteModal({
  note,
  isOpen,
  onEdit,
  onClose,
}: Props) {
  const [form, setForm] = useState({
    title: note.title,
    description: note.description,
  });

  function handleInputOnChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleAccept() {
    try {
      const id = note._id;
      await editNote(id, form);
      onEdit();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      title="Editar Nota"
      onAccept={handleAccept}
      onClose={onClose}
    >
      <form>
        <div className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
            >
              Titulo
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Titulo"
              value={form.title}
              onChange={handleInputOnChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
            >
              Descripcion
            </label>
            <textarea
              name="description"
              id="description"
              rows={5}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Descripcion de la nota..."
              value={form.description}
              onChange={handleInputOnChange}
            ></textarea>
          </div>
        </div>
      </form>
    </Modal>
  );
}
