import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Grid } from "@mui/material";
import EmptyArchive from "./EmptyArchive";
import ArchiveNote from "./ArchiveNote";
import NotFoundNote from "../NotFoundNote";

const Archive = () => {
  const { archiveNotes, searchQuery } = useContext(DataContext);

  const filteredArchiveNotes = archiveNotes.filter(note =>
    (note.title && note.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (note.text && note.text.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const isInvalidSearch = searchQuery.trim()!== "" && filteredArchiveNotes.length === 0;

  return (
    <>
    {isInvalidSearch ? (
        <NotFoundNote />
      ) : archiveNotes.length > 0 ? (
        <div className="note-items">
          <Grid container>
            {archiveNotes.map((note) => (
              <Grid item key={note.id}>
                <ArchiveNote note={note} />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <EmptyArchive />
      )}
    </>
  );
};

export default Archive;
