import { LightbulbOutlined as Lightbulb } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';
import '../../css/empty.css';

const EmptyNotes = () => {
    return (
        <Box className = "box">
            <Lightbulb id="icon"/>
            <Typography className='text'>Notes you add appear here</Typography>
        </Box>
    )
}

export default EmptyNotes;