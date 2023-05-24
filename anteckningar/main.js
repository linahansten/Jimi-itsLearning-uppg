import './style.css'
import { getNotes, addNote, editNote, deleteNote } from './notes.js'
import { v4 as uuidv4 } from 'uuid';
window.deleteNote = deleteNote

const notes = await getNotes()
window.notes = notes

async function handleSubmit(event) {
  event.preventDefault()
  const note = {
    id: uuidv4(),
    title: event.target[0].value,
    body: event.target[1].value,
    date: new Date().toLocaleDateString()
  }
  const msg = await addNote(note, notes)
  console.log(msg)
  displayNotes(notes)
  //window.location.reload()
}

function displayNotes(notes) {
  document.querySelector('#app').innerHTML = `
    <div>
      <form id="form">
        <input type="text" placeholder="Title"/>
        <textarea type="text" rows="5" cols="20" placeholder="Note"></textarea>
        <button type="submit" >Add Note</button>
      </form>
      ${notes.map(note => {
    return `
          <div class="notes">
            <h2>${note.title}</h2>
            <p>${note.body}</p>
            <div>
              <button class="edit" onclick="editNoteForm('${note.id}')">edit</button>
              <button onclick="onclickDelete('${note.id}', notes)" class="delete">delete</button>
            </div>
            <form id="edit-form-${note.id}" style="display: none;">
              <input type="text" placeholder="Title" value="${note.title}" />
              <textarea rows="5" cols="20" placeholder="Note">${note.body}</textarea>
              <button type="submit" >Save</button>
            </form>
          </div>
        `
  }).join('')}
    </div>
  `
  document.querySelector('#form').addEventListener('submit', handleSubmit)

}

displayNotes(notes)

function onclickDelete(id) {
  deleteNote(id, notes)
  displayNotes(notes)
}

window.onclickDelete = onclickDelete

async function editNoteForm(id) {
  const editForm = document.querySelector(`#edit-form-${id}`)
  editForm.style.display = 'flex'
  editForm.style.flexDirection = 'column'
  editForm.style.gap = '1rem'

}

notes.forEach(note => {
  const editForm = document.querySelector(`#edit-form-${note.id}`)
  editForm.addEventListener('submit', event => {
    event.preventDefault()
    const editedNote = {
      id: note.id,
      title: event.target[0].value,
      body: event.target[1].value,
      date: new Date().toLocaleDateString(),
    }
    editNote(editedNote)
    // displayNotes(notes)
  })
})
window.editNoteForm = editNoteForm
