import { ArchiveOutlined as Archive } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';
import '../css/emptyarchive.css';

const EmptyNotes = () => {
    return (
        <Box className = "archivebox">
            <Archive id="archive"/>
            <Typography className='text'>Notes you add appear here</Typography>
        </Box>
    )
}

export default EmptyNotes;