import { Avatar, AvatarBadge, Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { auth, firestore } from '../Firebase';
import UserBadge from './UserBadge';



const Message = ({ message }) => {
  const msgClass = message.uid === auth.currentUser.uid ? "msgSent" : "msgReceived";
  const [senderExp, setSenderExp] = useState(0);

  const userRef = firestore.collection("users").doc(message.uid);
  userRef.get().then((docSnapshot) => {
    setSenderExp(docSnapshot.get("exp"));
  })

  return (
    <>
      {message.uid !== auth.currentUser.uid ?
        // messages from others
        <Flex direction="row" align="center" mt="10px" ml="15px">
          <Avatar size="md" src={message.photoURL}>
            <UserBadge exp={senderExp} />
          </Avatar>
          <Box width="auto" className={`message ${msgClass}`}>
            {message.message}
          </Box>
        </Flex>
        :
        // messages from self
        <Flex direction="row" align="center" justify="flex-end" mt="10px" mr="15px">
          <Box width="auto" className={`message ${msgClass}`}>
            {message.message}
          </Box>
          <Avatar size="md" src={message.photoURL}>
            <UserBadge exp={senderExp} />
          </Avatar>
        </Flex>
      }
    </>
  );
}

export default Message;