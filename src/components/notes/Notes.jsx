import { useContext } from "react";
import TextForm from "../TextForm";
import Note from "./Note";
import EmptyNotes from "./EmptyNotes";
import { DataContext } from "../../context/DataProvider";
import { Grid } from "@mui/material";
import "../../css/notes.css";

const Notes = () => {
  const { notes, searchQuery } = useContext(DataContext);
  
  const filteredNotes = notes.filter(note =>
    (note.title && note.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (note.text && note.text.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <div className="text-wrapper">
        <TextForm />
      </div>

      {filteredNotes.length > 0 ? (
        <div className="note-items">
          <Grid container>
            {filteredNotes.map((note) => (
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
