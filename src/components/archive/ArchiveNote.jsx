import { Card, CardContent, CardActions, Typography } from "@mui/material";
import {
  UnarchiveOutlined as Unarchive,
  DeleteOutlineOutlined as Delete,
  EditOutlined as Edit
} from "@mui/icons-material";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import EditNoteModal from "../EditNoteModal";
import '../../css/note.css';

const ArchiveNote = ({ note }) => {
  const { setNotes, archiveNotes, setArchiveNotes, 
          setDeletedNotes, isEditModalOpen, setIsEditModalOpen, 
          editNote, handleEditModalClose } = useContext(DataContext);

  const unarchiveNote = (note) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(updatedNotes);
    setNotes((prevArr) => [note, ...prevArr]);
  };

  const deleteNote = (note) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(updatedNotes);
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
            onClick={editNote}
          />
          <Unarchive
            style={{ cursor: "pointer" }}
            onClick={() => unarchiveNote(note)}
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
        isArchived={true}
      />
    </>
  );
};

export default ArchiveNote;
