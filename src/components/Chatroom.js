import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

const Chatroom = () => {
  return (
    <Flex direction="column">
      <Box w="100%" h="1fr" bg="gray.100">
        Hi
      </Box>
      <Flex w="100%" h="50px" bg="yellow.100" mt="auto">
        Hi
      </Flex>
    </Flex>
  );
}
 
export default Chatroom;