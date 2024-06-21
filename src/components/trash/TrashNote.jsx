import { Card, CardContent, CardActions, Typography } from "@mui/material";
import {
  RestoreFromTrashOutlined as Restore,
  DeleteForeverOutlined as Delete,
} from "@mui/icons-material";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import '../../css/note.css';

const TrashNote = ({ note }) => {

  const { restoreNoteFromTrash, deleteNoteForever } = useContext(DataContext);
  
  return (
    <Card className="card-style">
      <CardContent>
        <Typography className="title">{note.title}</Typography>
        <Typography className="text">{note.text}</Typography>
      </CardContent>

      <CardActions className="cardicons">
        <Delete
          style={{ cursor: "pointer" }}
          onClick={() => deleteNoteForever(note.id)}
        />
        <Restore
          style={{ cursor: "pointer" }}
          onClick={() => restoreNoteFromTrash(note.id)}
        />
      </CardActions>
    </Card>
  );
};

export default TrashNote;
