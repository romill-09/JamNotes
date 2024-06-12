import { SentimentDissatisfiedOutlined as Sentiment } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import '../css/empty.css';

const NotFoundNote = () => {
  return (
   <Box className = "box">
      <Sentiment id="icon"/>
      <Typography className="text">Could not find the note</Typography>
   </Box>
  )
}

export default NotFoundNote