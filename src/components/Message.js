import { Box } from '@chakra-ui/react';
import React from 'react';
import { auth } from '../Firebase';

const Message = ({ message }) => {
  const msgClass = message.uid === auth.currentUser.uid ? "msgSent" : "msgReceived";
  return (  
    <Box className={`message ${msgClass}`}>
      {message.message}
    </Box>
  );
}
 
export default Message;