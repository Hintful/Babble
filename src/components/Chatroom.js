import { Box, Button, Divider, Flex, FormControl, Input, InputGroup, InputLeftElement, useTimeout } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { firestore } from "../Firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message';
import { auth } from '../Firebase';
import firebase from 'firebase/app';

const NUM_MSG_VISIBLE = 25;
const MSG_LENGTH_LIMIT = 100; // 100 characters
const MSG_SEND_COOLDOWN = 1000; // 1000ms = 1s

const Chatroom = () => {
  const messagesRef = firestore.collection("messages");
  const recentMessagesData = messagesRef.orderBy('createdAt', "desc").limit(NUM_MSG_VISIBLE);
  const [messages] = useCollectionData(recentMessagesData, { idField: 'id' });

  const [text, setText] = useState("");
  const [sendEnabled, setSendEnabled] = useState(true);
  const pageBottom = useRef();

  useEffect(() => {
    pageBottom.current.scrollIntoView({ behavior: "smooth" });
  });

  const sendMsgCooldown = () => {
    setSendEnabled(false);
    setTimeout(() => {
      setSendEnabled(true);
    }, MSG_SEND_COOLDOWN);
  }

  return (
    <Flex direction="column" bg="#ffffff" height="90vh">
      <Box w="100%" h="auto" pb="10px" style={{ overflow: "auto", maxHeight: "90vh" }}>
        {messages &&
          messages.reverse().map(message => <Message message={message} />)
        }
        <div ref={pageBottom}></div>
      </Box>
      <Flex w="100%" h="50px" bg="teal.200" px="5px" mt="auto" mr="5px" align="center" position="absolute" bottom="0">
        <form style={{ width: "100%", display: "inline-flex" }}
          onSubmit={async(e) => {
            e.preventDefault(); // prevent page refresh
            const { uid, photoURL } = auth.currentUser;

            sendMsgCooldown();

            await messagesRef.add({
              message: text,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              uid,
              photoURL
            });
            setText("");
            pageBottom.current.scrollIntoView({ behavior: "smooth" }); // scroll to bottom of page after sending msg
            
          }}>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<i class="fas fa-comment-dots"></i>} />
              <Input bg="white" placeholder="Type your message..." value={text}
                onChange={(e) => {
                  if(e.target.value.length > MSG_LENGTH_LIMIT) {
                    e.target.value = e.target.value.slice(0,MSG_LENGTH_LIMIT)
                  }
                  setText(e.target.value);
                }}
              />
            </InputGroup>

          </FormControl>
          
          <Divider orientation="vertical"/>

          <Button ml="5px" type="submit" colorScheme="blue" isDisabled={!sendEnabled}>
            Send&nbsp;<i class="fas fa-paper-plane"></i>
          </Button>
        </form>
      </Flex>
    </Flex>
  );
}

export default Chatroom;