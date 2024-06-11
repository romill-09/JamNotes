import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { Grid } from '@mui/material';
import EmptyArchive from './EmptyArchive';
import Note from './Note';

const Archive = () => {
  const { archiveNotes } = useContext(DataContext);

  return (
    <>
      {archiveNotes.length > 0 ? (
        <div className="note-items">
          <Grid container>
            {archiveNotes.map(note => (
              <Grid item key={note.id}>
                <Note note={note} />
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
