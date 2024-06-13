import { createContext, useState } from 'react'

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

   const [notes, setNotes] = useState([]);
   const [archiveNotes, setArchiveNotes] = useState([]);
   const [deletedNotes, setDeletedNotes] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");
   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

   const editNote = () => {
     setIsEditModalOpen(true);
   };
 
   const handleEditModalClose = () => {
     setIsEditModalOpen(false);
   };
  
  return (
     <DataContext.Provider value = {{
         notes, setNotes,
         archiveNotes, setArchiveNotes,
         deletedNotes, setDeletedNotes,
         searchQuery, setSearchQuery,
         isEditModalOpen, setIsEditModalOpen,
         editNote, handleEditModalClose
      }}>
         { children }
      </DataContext.Provider>
  )
}

export default DataProvider;