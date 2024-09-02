const API_URL = process.env.REACT_APP_API_URL;

// GET /api/notes ---> LLamada a las notas
export async function getApiNotes() {
  try {
    const response = await fetch(`${API_URL}/api/notes`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// POST /api/notes ---> Crear una nota
export async function createNote(payload: unknown) {
  try {
    const response = await fetch(`${API_URL}/api/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// PUT /api/notes/:id ---> Editar una nota
export async function editNote(id: string, payload: unknown) {
  try {
    const response = await fetch(`${API_URL}/api/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// DELETE /api/notes/:id ---> Eliminar una nota
export async function deleteNote(id: string) {
  try {
    const response = await fetch(`${API_URL}/api/notes/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
