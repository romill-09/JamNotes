import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Grid } from "@mui/material";
import EmptyTrash from "./EmptyTrash";
import TrashNote from "./TrashNote";
import NotFoundNote from "../NotFoundNote";

const Trash = () => {
  const { deletedNotes, searchQuery } = useContext(DataContext);
  
  const filteredTrashNotes = deletedNotes.filter(note =>
    (note.title && note.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (note.text && note.text.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const isInvalidSearch = searchQuery.trim()!== "" && filteredTrashNotes.length === 0;

  return (
    <>
      {isInvalidSearch ? (
        <NotFoundNote />
      ) : deletedNotes.length > 0 ? (
        <div className="note-items">
          <Grid container>
            {deletedNotes.map((note) => (
              <Grid item key={note.id}>
                <TrashNote note={note} />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <EmptyTrash />
      )}
    </>
  );
};

export default Trash;
