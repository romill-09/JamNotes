import { Card, CardContent, CardActions, Typography } from "@mui/material";
import {
  UnarchiveOutlined as Unarchive,
  DeleteOutlineOutlined as Delete,
  EditOutlined as Edit,
} from "@mui/icons-material";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import EditNoteModal from "../EditNoteModal";
import "../../css/note.css";

const ArchiveNote = ({ note }) => {
  const {
    deleteNote,
    editNote,
    unarchiveNote,
    isEditModalOpen,
    handleEditModalClose,
  } = useContext(DataContext);

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
          <Unarchive
            style={{ cursor: "pointer" }}
            onClick={() => unarchiveNote(note.id)}
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
        isArchived={true}
      />
    </>
  );
};

export default ArchiveNote;
