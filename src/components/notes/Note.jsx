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
  const { deleteNote, editNote, updateNote, isEditModalOpen, handleEditModalClose } = useContext(DataContext);

  const archiveNote = async (note) => {
    await updateNote(note.id, { ...note, isArchived: true });
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
            onClick={() => deleteNote(note.id)}
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
