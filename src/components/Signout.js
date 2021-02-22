import { Button } from '@chakra-ui/react';
import React from 'react';
import { auth } from '../Firebase';
import toast, { Toaster } from 'react-hot-toast';

const Signout = () => {
  return (
    <>
      <Toaster />
      <Button h="40px" ml="auto" colorScheme="red" disabled={!auth.currentUser}
        rightIcon={<i class="fas fa-sign-out-alt"></i>}
        onClick={() => {
          if (auth.currentUser) {
            auth.signOut();
            toast(`You have signed out.`,
              {
                icon: '🚪',
                duration: 3000
              });
          }
        }}
      >
        Sign out
      </Button>
    </>
  );
}

export default Signout;