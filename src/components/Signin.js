import { Button, Center } from '@chakra-ui/react';
import React from 'react';
import firebase from 'firebase/app';
import { auth, firestore } from "../Firebase";

function handleSignin() {
  const googleAuth = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleAuth).then(cred => {
    const userRef = firestore.collection("users").doc(auth.currentUser.uid);
    userRef.get().then((docSnapshot) => {
      if (!docSnapshot.exists) { // create new document only if it doesn't already exist by the given uid
        return firestore.collection("users").doc(cred.user.uid)
          .set({ exp: 0 }, { merge: true });
      }
    })
  }).then(() => {
    //
  });
}

const Signin = () => {
  return (
    <Center w="100%" h="90vh" bg="white">
      <Button colorScheme="green"
        leftIcon={<i class="fas fa-sign-in-alt"></i>}
        onClick={() => { handleSignin() }}
      >
        Sign-in with Google
      </Button>
    </Center>
  );
}

export default Signin;