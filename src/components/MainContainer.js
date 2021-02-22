import { Box, Divider } from '@chakra-ui/react';
import React from 'react';
import Chatroom from './Chatroom';
import Navbar from './Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../Firebase";
import Signin from './Signin';

const MainContainer = () => {
  const [user, loading, error] = useAuthState(auth);
  return (  
    <Box w="100vw" h="100vh" bg="white">
      <Navbar />
      { user ? <Chatroom /> : <Signin />}
    </Box>
  );
}
 
export default MainContainer;