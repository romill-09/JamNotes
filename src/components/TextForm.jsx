import { useState, useRef, useContext } from "react";
import { TextField, ClickAwayListener } from "@mui/material";
import { DataContext } from '../context/DataProvider';
import { v4 as uuid } from 'uuid';
import '../css/textform.css';
import { AddPhotoAlternateSharp } from "@mui/icons-material";

const note = {
  id: '',
  title: '',
  text: ''
};

const TextForm = () => {

  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState({...note, id: uuid()});
  const {setNotes} = useContext(DataContext);
  const containerRef = useRef();

  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = "25px";
    setAddNote({ ...note, id: uuid()})

    if(addNote.title || addNote.text)
    {
      setNotes(preArr => [addNote, ...preArr]);
    }
  };

  const onTextAreaClick = () => {
    setShowTextField(true);
    containerRef.current.style.minHeight = "100px";
  };

  const ontextChange = (e) => {
    const { name, value } = e.target;
    let changedNote = {...addNote, [name]: value};
    setAddNote(changedNote);
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
            onChange={ (e) => ontextChange(e) }
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
          onChange={ (e) => ontextChange(e) }
          name="text"
          value={addNote.text}
        />
      </div>
    </ClickAwayListener>
  );
};

export default TextForm;
