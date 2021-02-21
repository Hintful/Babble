import { Box, Button, Flex, FormControl, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import { firestore } from "../Firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message';
import { auth } from '../Firebase';
import firebase from 'firebase/app';

const NUM_MSG_VISIBLE = 25;

const Chatroom = () => {
  const messagesRef = firestore.collection("messages");
  const recentMessagesData = messagesRef.orderBy('createdAt').limit(NUM_MSG_VISIBLE);
  const [messages] = useCollectionData(recentMessagesData, { idField: 'id' });

  const [text, setText] = useState("");

  return (
    <Flex direction="column">
      <Box w="100%" h="auto" pb="5px" style={{ overflow: "auto", maxHeight: "90vh" }}>
        {messages &&
          messages.map(message => <Message message={message} />)
        }
      </Box>
      <Flex w="100%" h="50px" bg="teal.200" px="5px" mt="auto" align="center" position="absolute" bottom="0">
        <form style={{ width: "100%", display: "inline-flex" }}
          onSubmit={async(e) => {
            e.preventDefault(); // prevent page refresh
            const { uid, photoURL } = auth.currentUser;

            await messagesRef.add({
              message: text,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              uid,
              photoURL
            });
            setText("");
          }}>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<i class="fas fa-comment-dots"></i>} />
              <Input bg="white" placeholder="Type your message" value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </InputGroup>

          </FormControl>
          <Button type="submit">
            Send
          </Button>
        </form>
      </Flex>
    </Flex>
  );
}

export default Chatroom;