import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from "@mui/icons-material";
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import "../css/note.css";

const Note = ({ note }) => {

  const { notes, setNotes, setArchiveNotes, setDeletedNotes } = useContext(DataContext);
  
  const archiveNote = (note) => {
    const updatedNotes = notes.filter(data => data.id !== note.id);
    setNotes(updatedNotes);
    setArchiveNotes(prevArr => [note, ...prevArr]);
  };

  const deleteNote = (note) => {
    const updatedNotes = notes.filter(data => data.id !== note.id);
    setNotes(updatedNotes);
    setDeletedNotes(prevArr => [note, ...prevArr]);
  };

  return (
    <Card className="card-style">

      <CardContent>
        <Typography className="title">{note.title}</Typography>
        <Typography className="text">{note.text}</Typography>
      </CardContent>

      <CardActions className="card">
        <Archive
          fontSize="small"
          style={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={() => archiveNote(note)}
        />
        <Delete 
          fontSize="small"
          style = {{ cursor: "pointer" }}
          onClick={() => deleteNote(note)} />
      </CardActions>

    </Card>
  );
};

export default Note;
