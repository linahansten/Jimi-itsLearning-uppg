

export async function getNotes() {
  const note = JSON.parse(localStorage.getItem('notes'));
  return note ? [...note] : []
}

export async function addNote(note, notes) {
  notes.push(note)
  const msg = localStorage.setItem('notes', JSON.stringify(notes))
  return !msg ? 'Note added' : new Error('something went wrong')
}

export async function editNote(editedNote) {
  const notes = await getNotes()
  const index = notes.findIndex(note => note.id === editedNote.id)
  notes[index] = editedNote
  const msg = localStorage.setItem('notes', JSON.stringify(notes))
  window.location.reload()
}

export async function deleteNote(id, notes) {
  const index = notes.findIndex(note => note.id === id)
  notes.splice(index, 1)
  const msg = localStorage.setItem('notes', JSON.stringify(notes))
  return !msg ? 'Note added' : new Error('something went wrong')
}
