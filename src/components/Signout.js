import { Button } from '@chakra-ui/react';
import React from 'react';
import { auth } from '../Firebase';

const Signout = () => {
  return (  
    <Button h="40px" ml="auto" disabled={!auth.currentUser}
      onClick={() => {
        if(auth.currentUser) {
          auth.signOut();
        }
      }}
    >
      Sign out
    </Button>
  );
}
 
export default Signout;