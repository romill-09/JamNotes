import { createContext, useState, useEffect } from "react";
import {
  auth,
  onAuthStateChanged,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp
} from "../firebase";
import { db } from "../firebase";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [load, setLoad] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const notesRef = collection(db, "notes");
        const q = query(notesRef, where("uid", "==", user.uid), orderBy("createdAt", "desc"));
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
          setTimeout(() => {
            setNotes(notesData);
            setArchiveNotes(archiveData);
            setDeletedNotes(deletedData);
            setLoad(false);
          }, 2000);
        });
        return () => unsubscribe();
      } else {
        // Clear notes state when no user is authenticated
        setNotes([]);
        setArchiveNotes([]);
        setDeletedNotes([]);
      }
    });
    return () => unsubscribeAuth();
  }, [auth]);

  const addNote = async (note) => {
    if (user) {
      await addDoc(collection(db, "notes"), { ...note, uid: user.uid, createdAt: serverTimestamp() });
    } else {
      console.error("User is not authenticated.");
    }
  };

  const updateNote = async (id, updatedNote) => {
    await updateDoc(doc(db, "notes", id), updatedNote);
  };

  const deleteNote = async (id) => {
    await updateDoc(doc(db, "notes", id), {
      isArchived: false,
      isDeleted: true,
    });
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

  function replaceNewlinesWithBrTags(inputString) {
    return inputString.replace(/\n/g, "<br>");
  }

  return (
    <DataContext.Provider
      value={{
        notes,
        setNotes,
        archiveNotes,
        setArchiveNotes,
        deletedNotes,
        setDeletedNotes,
        searchQuery,
        setSearchQuery,
        isEditModalOpen,
        setIsEditModalOpen,
        currentNote,
        setCurrentNote,
        addNote,
        updateNote,
        deleteNote,
        unarchiveNote,
        restoreNoteFromTrash,
        deleteNoteForever,
        editNote,
        handleEditModalClose,
        replaceNewlinesWithBrTags,
        load,
        setLoad,
        user,
        setLoad
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
