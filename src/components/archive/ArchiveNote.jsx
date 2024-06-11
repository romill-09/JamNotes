import { Card, CardContent, CardActions, Typography } from "@mui/material";
import {
  UnarchiveOutlined as Unarchive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const A1 = ({ note }) => {
  const { notes, setNotes, archiveNotes, setArchiveNotes, setDeletedNotes } =
    useContext(DataContext);

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
    <Card className="card-style">
      <CardContent>
        <Typography className="title">{note.title}</Typography>
        <Typography className="text">{note.text}</Typography>
      </CardContent>

      <CardActions className="card">
        <Unarchive
          fontSize="small"
          style={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={() => unarchiveNote(note)}
        />
        <Delete
          fontSize="small"
          style={{ cursor: "pointer" }}
          onClick={() => deleteNote(note)}
        />
      </CardActions>
    </Card>
  );
};

export default A1;
