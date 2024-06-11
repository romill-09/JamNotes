import { useContext } from "react";
import TextForm from "./TextForm";
import Note from "./Note";
import EmptyNotes from './EmptyNotes'; 
import { DataContext } from "../context/DataProvider";
import { Grid } from '@mui/material';
import '../css/notes.css';

const Notes = () => {

  const { notes } = useContext(DataContext);

  return (

    <>
      
      <div className="text-wrapper">
        <TextForm />
      </div>

      {notes.length > 0 ? (
        <div className="note-items">
          <Grid container>
            {notes.map(note => (
              <Grid item key={note.id}>
                <Note note={note} />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
          <EmptyNotes />
      )}

    </>
  );
};

export default Notes;
