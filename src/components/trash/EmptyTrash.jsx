import { DeleteOutlineOutlined as Trash } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';
import '../../css/empty.css';

const EmptyTrash = () => {
    return (
        <Box className = "box">
            <Trash id="icon"/>
            <Typography className='text'>Deleted notes will appear here</Typography>
        </Box>
    )
}

export default EmptyTrash;