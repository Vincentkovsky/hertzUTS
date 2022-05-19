import { Flex, Box, Text, Icon, Button, Spacer, Alert } from '@chakra-ui/react';
import Link from 'next/link';
import Cartitem from '../components/Cartitem';
// import noresult from '../assets/images/noresult.svg'

function shoppingcart(cartItems) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const router = useRouter();
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', "window.localStorage.getItem('cart')");
  ourRequest.onload = function () {
    var data = ourRequest.responseText;
    console.log(data);
  };
  ourRequest.send();

  let cart = [];
  let linkname1 = '/checkout';
  if (!localStorage.getItem('cart')) {
    cart = [];
    if (cart.length == 0) {
      linkname1 = '/shoppingcart';
    }
  } else {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart.length == 0) {
      linkname1 = '/shoppingcart';
    }
  }

  return (
    <>
      <Box w="full" alignContent="center" h="500px">
        {cart.map((car) => (
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
                if (cart.length == 0) {
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
