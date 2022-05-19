import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import { name } from './constants.js';

const order = () => {
  let info = name;
  return (
    <Box h="600px">
      <Box h="30px"></Box>
      <Flex w="800px">
        <Text style={{ float: 'left' }} fontSize="2xl" fontWeight="black">
          Dear {info.firstName} {info.lastName},
        </Text>
      </Flex>
      <Box h="60px"></Box>
      <Flex alignContent="center" justifyContent="center">
        <Text fontSize="6xl">Congratulations! We have received you order!</Text>
      </Flex>
      <Flex alignContent="center" justifyContent="center">
        <Text fontSize="6xl">Hope to see you soon!</Text>
      </Flex>
      <Box h="60px"></Box>
      <Flex alignContent="flex-end" justifyContent="end">
        <Text fontSize="3xl" fontWeight="black" color="#f90">
          Hertz-UTS
        </Text>
      </Flex>
    </Box>
  );
};

export default order;
