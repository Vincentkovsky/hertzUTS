import { Flex, Box, Text, Icon, Button, Spacer, Alert } from '@chakra-ui/react';
import Link from 'next/link';
import Cartitem from '../components/Cartitem';
import { carts } from '../constants.js';
// import noresult from '../assets/images/noresult.svg'

function shoppingcart(cartItems) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const router = useRouter();
  let linkname1 = '/checkout';
  if (carts != undefined) {
    if (carts.length == 0) {
      carts = [];
      if (carts.length == 0) {
        linkname1 = '/shoppingcart';
      }
    } else {
      // carts = cart;
      if (carts.length == 0) {
        linkname1 = '/shoppingcart';
      }
    }
  } else {
    carts = [
      {
        Category: 'Sedan',
        Availability: true,
        Brand: 'Toyota',
        Model: 'Camry',
        Modelyear: 2013,
        Mileage: 10000,
        Fueltype: 'Petrol',
        Seats: 5,
        Priceperday: '$120',
        Description: 'xxxxxxx',
      },
    ];
  }
  return (
    <>
      <Box w="full" alignContent="center" h="500px">
        {carts.map((car) => (
          <Cartitem car={car} key={car.Model} />
        ))}
      </Box>
      <Flex>
        <Spacer></Spacer>
        <Box justifyContent="right">
          <Link href={linkname1}>
            <Button
              bg="#1b1b1b"
              color="#f90"
              onClick={() => {
                if (carts.length == 0) {
                  alert('No car has been researved!');
                }
              }}
            >
              Checkout
            </Button>
          </Link>
        </Box>
      </Flex>
    </>
  );
}

export default shoppingcart;
