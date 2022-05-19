import {
  CloseButton,
  Box,
  Flex,
  Text,
  Spacer,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import { carts } from '../constants.js';

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

function Cartitem({
  car: {
    Category,
    Availability,
    Brand,
    Model,
    Modelyear,
    Mileage,
    Fueltype,
    Seats,
    Priceperday,
    Description,
  },
}) {
  const deleteCart = ({ Model }) => {
    let cart = carts;
    cart = cart.filter((element) => element.Model != Model);
    carts = cart;
  };
  const [days, setValue] = React.useState('');
  const handleChange = (event) => setValue(event.target.value);

  return (
    <Flex
      flexWrap="wrap"
      p="5"
      justifyContent="space-between"
      alignItems="center"
      cursor="pointer"
    >
      <Box>
        <Image
          alt={'Car'}
          src={
            `/assets/img/${Model}.jpg`
              ? `/assets/img/${Model}.jpg`
              : DefaultImage
          }
          width={200}
          height={130}
        />
      </Box>
      <Spacer></Spacer>
      <Box alignItems="center">
        <Text fontSize="lg" fontWeight="bold">
          {Brand} {Model} {Modelyear}
        </Text>
      </Box>
      <Spacer />
      <Text>{Priceperday} / Day</Text>
      <Spacer />
      <Text fontSize="large">Rental Days: </Text>
      <NumberInput
        //   value={days}
        //   onChange={handleChange}
        defaultValue={1}
        min={1}
        size="md"
      >
        <NumberInputField size="middle" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Spacer></Spacer>
      <Link href="/shoppingcart">
        <Text onClick={() => deleteCart({ Model })}>Remove from cart</Text>
      </Link>
      <Link href="/shoppingcart">
        <CloseButton
          aria-label={`Delete ${Model} from cart`}
          onClick={() => deleteCart({ Model })}
        />
      </Link>
    </Flex>
  );
}

export default Cartitem;
