import { Card, CardContent, CardActions, Typography } from "@mui/material";
import {
  RestoreFromTrashOutlined as Restore,
  DeleteForeverOutlined as Delete,
} from "@mui/icons-material";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import '../../css/note.css';

const TrashNote = ({ note }) => {
  const { setNotes, deletedNotes, setDeletedNotes } =
    useContext(DataContext);

  const restoreNote = (note) => {
    const updatedNotes = deletedNotes.filter((data) => data.id !== note.id);
    setDeletedNotes(updatedNotes);
    setNotes((prevArr) => [note, ...prevArr]);
  };

  const deleteNote = (note) => {
    const updatedNotes = deletedNotes.filter((data) => data.id !== note.id);
    setDeletedNotes(updatedNotes);
  };

  return (
    <Card className="card-style">
      <CardContent>
        <Typography className="title">{note.title}</Typography>
        <Typography className="text">{note.text}</Typography>
      </CardContent>

      <CardActions className="cardicons">
        <Delete
          style={{ cursor: "pointer" }}
          onClick={() => deleteNote(note)}
        />
        <Restore
          style={{ cursor: "pointer" }}
          onClick={() => restoreNote(note)}
        />
      </CardActions>
    </Card>
  );
};

export default TrashNote;
