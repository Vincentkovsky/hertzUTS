import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import millify from 'millify';
import DefaultImage from '../public/assets/images/buggati.jpeg';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import cars from '../public/assets/cars.json';
import { carts } from '../constants.js';

function Car({
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
  // let cart = carts;
  // console.log(cart);
  const addToCart = ({
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
  }) => {
    if (Availability == true) {
      if (carts == undefined) {
        carts = [];
      }
      // let cart = JSON.parse(localStorage.getItem('cart'));
      if (carts.length == 0) {
        carts.push({
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
        });
      } else {
        let res = carts.find((element) => element.Model == Model);
        if (res === undefined) {
          carts.push({
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
          });
        }
      }
      // carts = cart;
      alert('Add to the cart successfully!');
    } else {
      alert('Sorry, the car is not available now. Please come back later.');
    }

    // console.log(cart);
    // sessionStorage.setItem(
    //   `${Model}`,
    //   JSON.stringify({
    //     Category,
    //     Availability,
    //     Brand,
    //     Model,
    //     Modelyear,
    //     Mileage,
    //     Fueltype,
    //     Seats,
    //     Priceperday,
    //     Description,
    //     id,
    //   })
    // );
  };

  return (
    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0px"
      justifyContent="flex-start"
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
          width={400}
          height={260}
        />
      </Box>
      <Box w="full">
        <Flex
          paddingTop="2"
          alignItems="center"
          justifyContent="space-between"
          fontSize="lg"
        >
          {Brand} {Model}
          <Text fontWeight="bold" fontSize="medium">
            {' '}
            {Priceperday}/day
          </Text>
          <div key={Model}>
            <Button
              fontSize="sm"
              color="#f90"
              bg="#1b1b1b"
              onClick={() =>
                addToCart({
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
                })
              }
            >
              {Availability ? 'Add to cart' : 'Come later'}
            </Button>
          </div>
        </Flex>
        <Flex p="1" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">
              {Availability ? `Available Now` : `Not Available Now`}
            </Box>
          </Flex>
        </Flex>
        <Flex
          alignItems="center"
          p="1"
          justifyContent="space-between"
          width="330"
          color="blue.400"
        >
          {Seats} seats <MdAirlineSeatReclineNormal /> | {Fueltype} | {Mileage}{' '}
          miles | {Modelyear} | {Category}
        </Flex>
        {/* <Text fontSize='lg'>
            {Description.length > 30 ? Description.substring(0, 30) + '...' : Description}
          </Text> */}
      </Box>
    </Flex>
  );
}

export default Car;
