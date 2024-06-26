import { useState, useContext, useEffect } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { DataContext } from "../context/DataProvider";
import "../css/editnotemodal.css";

const EditNoteModal = ({ open, handleClose, note, isArchived }) => {
  const { updateNote } = useContext(DataContext);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  useEffect(() => {
    setTitle(note.title);
    setText(note.text);
  }, [note]);

  const handleSave = async () => {
    const updatedNote = { ...note, title, text };

    await updateNote(note.id, updatedNote);

    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="modal-box">
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
          className="modal-title"
        />
        <div className="text-area-container">
          <TextField
            label="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            maxRows={Infinity}
            className="modal-text"
          />
          </div>
        <Box className="modal-button">
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditNoteModal;
