import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";

export default function NotePage({ notes, handleCreateNote, sortOrder, setSortOrder, handleDeleteNote }) {

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  }

  return (
    <>
    <h1>Notes</h1>
    <NewNoteForm handleCreateNote={handleCreateNote} />
    <button onClick={handleSort}>Sort Notes</button>
    {notes.length ? notes.map((n, idx) => (
      <p key={idx}>{n.text} {new Date(n.createdAt).toLocaleString()} <button onClick={() => handleDeleteNote(n._id)}>X</button></p>          
    )) : <p>No Notes Yet</p>} 
    </>
  )
}