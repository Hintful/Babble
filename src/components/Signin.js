import { Button, Center } from '@chakra-ui/react';
import React from 'react';
import firebase from 'firebase/app';
import { auth } from "../Firebase";

const Signin = () => {
  return (  
    <Center w="100%" h="90vh" bg="white">
      <Button colorScheme="green"
        leftIcon={<i class="fas fa-sign-in-alt"></i>}
        onClick={() => {
          const googleAuth = new firebase.auth.GoogleAuthProvider();
          auth.signInWithPopup(googleAuth);
        }}
      >
        Sign-in with Google
      </Button>
    </Center>
  );
}
 
export default Signin;