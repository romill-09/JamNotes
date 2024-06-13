import { Card, CardContent, CardActions, Typography } from "@mui/material";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
  EditOutlined as Edit
} from "@mui/icons-material";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import EditNoteModal from "../EditNoteModal";
import "../../css/note.css";

const Note = ({ note }) => {
  const { notes, setNotes, setArchiveNotes, 
          setDeletedNotes, isEditModalOpen, 
          editNote, handleEditModalClose } = useContext(DataContext); 

  const archiveNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setArchiveNotes((prevArr) => [note, ...prevArr]);
  };

  const deleteNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeletedNotes((prevArr) => [note, ...prevArr]);
  };

  return (
    <>
      <Card className="card-style">
        <CardContent>
          <Typography className="title">{note.title}</Typography>
          <Typography className="text">{note.text}</Typography>
        </CardContent>

        <CardActions className="cardicons">
          <Edit
            style={{ cursor: "pointer" }}
            onClick={() => editNote(note)}
          />
          <Archive
            style={{ cursor: "pointer" }}
            onClick={() => archiveNote(note)}
          />
          <Delete
            style={{ cursor: "pointer" }}
            onClick={() => deleteNote(note)}
          />
        </CardActions>
      </Card>
      
      <EditNoteModal
        open={isEditModalOpen}
        handleClose={handleEditModalClose}
        note={note}
        isArchived={false}
      />
    </>
  );
};

export default Note;
