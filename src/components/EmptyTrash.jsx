import { DeleteOutlineOutlined as Trash } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';
import '../css/emptytrash.css';

const EmptyTrash = () => {
    return (
        <Box className = "trashbox">
            <Trash id="trash"/>
            <Typography className='text'>Notes you add appear here</Typography>
        </Box>
    )
}

export default EmptyTrash;