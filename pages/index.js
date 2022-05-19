import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import imageUrl from '../public/assets/images/buggati.jpeg';
// the image is from https://www.motor1.com/photo/5213515/bugatti-chiron-super-sport-300-exterior/
import cars from '../public/assets/cars.json';
import Car from '../components/Car';

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl" color="#f90" bg="#1b1b1b">
        <Link href={linkName}>
          <a>{buttonText}</a>
        </Link>
      </Button>{' '}
    </Box>
  </Flex>
);

export default function Home() {
  return (
    <Box>
      <Banner
        purpose="RENT A CAR"
        title1="Rent cars for"
        title2="Everyone"
        desc1="Explore from sedans, SUVs and wagons"
        desc2="and more"
        buttonText="Shopping cart"
        linkName="/shoppingcart"
        imageUrl={imageUrl}
      />
      <Flex flexWrap="wrap">
        {cars.map((car) => (
          <Car car={car} key={car.Model} />
        ))}
      </Flex>
    </Box>
  );
}
