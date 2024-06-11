import { LightbulbOutlined as Lightbulb } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';
import '../css/emptynotes.css';

const EmptyNotes = () => {
    return (
        <Box className = "notebox">
            <Lightbulb id="lightbulb"/>
            <Typography className='text'>Notes you add appear here</Typography>
        </Box>
    )
}

export default EmptyNotes;