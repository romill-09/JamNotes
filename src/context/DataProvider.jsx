import { createContext, useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase"; // adjust the path as necessary

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "notes"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const notesData = [];
      const archiveData = [];
      const deletedData = [];
      querySnapshot.forEach((doc) => {
        const note = { ...doc.data(), id: doc.id };
        if (note.isArchived) {
          archiveData.push(note);
        } else if (note.isDeleted) {
          deletedData.push(note);
        } else {
          notesData.push(note);
        }
      });
      setNotes(notesData);
      setArchiveNotes(archiveData);
      setDeletedNotes(deletedData);
    });
    return () => unsubscribe();
  }, []);

  const addNote = async (note) => {
    await addDoc(collection(db, "notes"), note);
  };

  const updateNote = async (id, updatedNote) => {
    await updateDoc(doc(db, "notes", id), updatedNote);
  };

  const deleteNote = async (id) => {
    await updateDoc(doc(db, "notes", id), { isArchived: false, isDeleted: true });
  };

  const unarchiveNote = async (id) => {
    await updateDoc(doc(db, "notes", id), { isArchived: false });
  };

  const restoreNoteFromTrash = async (id) => {
    await updateDoc(doc(db, "notes", id), { isDeleted: false });
  };

  const deleteNoteForever = async (id) => {
    await deleteDoc(doc(db, "notes", id));
  };

  const editNote = (note) => {
    setCurrentNote(note);
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
    setCurrentNote(null);
  };

  return (
    <DataContext.Provider value={{
        notes, setNotes,
        archiveNotes, setArchiveNotes,
        deletedNotes, setDeletedNotes,
        searchQuery, setSearchQuery,
        isEditModalOpen, setIsEditModalOpen,
        currentNote, setCurrentNote,
        addNote, updateNote, deleteNote,
        unarchiveNote, restoreNoteFromTrash, deleteNoteForever,
        editNote, handleEditModalClose
    }}>
      { children }
    </DataContext.Provider>
  );
}

export default DataProvider;
