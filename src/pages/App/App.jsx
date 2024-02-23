import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import NavBar from '../../components/NavBar/NavBar';
import NotePage from '../NotePage/NotePage';
import * as notesApi from '../../utilities/notes-api';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    async function getAllNotes() {
      const allNotes = await notesApi.getNotes()
      setNotes(allNotes);
    }
    getAllNotes()  
  }, [sortOrder])

  async function handleCreateNote(newNote) {
    const note = await notesApi.createNote(newNote);
    setNotes([...notes, note]);
    
  }

  async function handleDeleteNote(noteId) {
    const allNotes = await notesApi.deleteNote(noteId);
    setNotes(allNotes);  
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<NotePage notes={notes} handleCreateNote={handleCreateNote} sortOrder={sortOrder} setSortOrder={setSortOrder} handleDeleteNote={handleDeleteNote}/>} />
              <Route path="/orders/new" element={<NewOrderPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
