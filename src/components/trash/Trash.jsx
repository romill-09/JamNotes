import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Grid } from "@mui/material";
import EmptyTrash from "./EmptyTrash";
import T1 from "./TrashNote";

const Trash = () => {
  const { deletedNotes } = useContext(DataContext);

  return (
    <>
      {deletedNotes.length > 0 ? (
        <div className="note-items">
          <Grid container>
            {deletedNotes.map((note) => (
              <Grid item key={note.id}>
                <T1 note={note} />
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
