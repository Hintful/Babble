import { Box, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Signout from './Signout';

const Navbar = () => {
  return (
    <Flex direction="row" px="5px" align="center" h="50px" w="100%" bg="gray.300">
      <Text className="navbar-logo" fontFamily="Poppins" fontWeight="600" fontSize="lg" ml="10px">
        <i class="fas fa-comments emphasis"></i> Babble
      </Text>
      <Signout />
    </Flex>
  );
}

export default Navbar;