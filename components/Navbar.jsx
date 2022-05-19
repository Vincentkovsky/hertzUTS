import Link from 'next/link';
import { IconButton, Flex, Box, Spacer, Button } from '@chakra-ui/react';
import { BsFillCartCheckFill } from 'react-icons/bs';

const Navbar = () => (
  <Flex
    p="4"
    borderBottom="1px"
    borderColor="gray.100"
    bg="#1b1b1b"
    width="100%"
  >
    <Box fontSize="3xl" color="#f90" fontWeight="bold">
      <Link href="/" paddingLeft="2">
        Hertz-UTS
      </Link>
    </Box>
    <Spacer />
    <Box>
      <Link href="shoppingcart">
        <Button
          as={IconButton}
          icon={<BsFillCartCheckFill />}
          variant="outline"
          color="#f90"
          bg="#1b1b1b"
        ></Button>
      </Link>
    </Box>
  </Flex>
);

export default Navbar;
