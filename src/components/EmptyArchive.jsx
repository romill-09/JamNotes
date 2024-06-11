import { ArchiveOutlined as Archive } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';
import '../css/empty.css';

const EmptyNotes = () => {
    return (
        <Box className = "box">
            <Archive id="icon"/>
            <Typography className='text'>Archived notes will appear here</Typography>
        </Box>
    )
}

export default EmptyNotes;