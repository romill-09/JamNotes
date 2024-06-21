import { useState, useRef, useContext } from "react";
import { TextField, ClickAwayListener } from "@mui/material";
import { DataContext } from '../context/DataProvider';
import '../css/textform.css';

const TextForm = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState({ title: '', text: '' });
  const { addNote: addNoteToDB } = useContext(DataContext);
  const containerRef = useRef();

  const handleClickAway = async () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = "25px";

    if (addNote.title || addNote.text) {
      await addNoteToDB(addNote);
      setAddNote({ title: '', text: '' });
    }
  };

  const onTextAreaClick = () => {
    setShowTextField(true);
    containerRef.current.style.minHeight = "100px";
  };

  const ontextChange = (e) => {
    const { name, value } = e.target;
    setAddNote(prevNote => ({ ...prevNote, [name]: value }));
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div 
        ref={containerRef}
        className="textcontainer"
      >
        {showTextField && (
          <TextField
            className="textfield"
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            onChange={ontextChange}
            name="title"
            value={addNote.title}
          />
        )}
        <TextField
          className="textfield"
          placeholder="Take a note..."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={onTextAreaClick}
          onChange={ontextChange}
          name="text"
          value={addNote.text}
        />
      </div>
    </ClickAwayListener>
  );
};

export default TextForm;
