import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";


export default function NotePage({ notes, handleCreateNote }) {


  return (
    <>
    <h1>Notes</h1>
    <NewNoteForm handleCreateNote={handleCreateNote} />
    {notes.length ? notes.map((n, idx) => (
      <p key={idx}>{n.text} {new Date(n.createdAt).toLocaleString()}</p>
    )) : <p>No Notes Yet</p>} 
    </>
  )
}