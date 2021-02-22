import { Avatar, AvatarBadge, Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { auth } from '../Firebase';

const Message = ({ message }) => {
  const msgClass = message.uid === auth.currentUser.uid ? "msgSent" : "msgReceived";
  const senderLevel = 0;
  return (
    <>
      {message.uid !== auth.currentUser.uid ?
        <Flex direction="row" align="center" mt="10px" ml="15px">
          <Avatar size="md" src={message.photoURL}>
            <AvatarBadge boxSize="1em" bg="teal" style={{ border: "2px solid white" }}>
              <span style={{ color: "white", fontWeight: "200", fontSize: 12 }}>{senderLevel}</span>
            </AvatarBadge>
          </Avatar>
          <Box width="auto" className={`message ${msgClass}`}>
            {message.message}
          </Box>
        </Flex>
        :
        <Flex direction="row" align="center" justify="flex-end" mt="10px" mr="15px">
          <Box width="auto" className={`message ${msgClass}`}>
            {message.message}
          </Box>
          <Avatar size="md" src={message.photoURL}>
            <AvatarBadge boxSize="1em" bg="teal" style={{ border: "2px solid white" }}>
              <span style={{ color: "white", fontWeight: "200", fontSize: 12 }}>{senderLevel}</span>
            </AvatarBadge>
          </Avatar>
        </Flex>
      }
    </>
  );
}

export default Message;