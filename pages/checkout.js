import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import {
  Flex,
  Box,
  Text,
  Icon,
  Button,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import Car from '../components/Car';
import Link from 'next/link';
import {
  Form,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

// import noresult from '../assets/images/noresult.svg'

const Checkout = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('info', JSON.stringify(values));
      }
      setTimeout(() => {
        router.push('/order');
        resolve();
      }, 500);
    });
  }

  return (
    <>
      <Flex w="full" alignItems="center">
        <Box w="full">
          <Text fontSize="4xl" fontWeight="black" textAlign="center">
            Check Out
          </Text>
        </Box>
      </Flex>
      <Flex w="full" justifyContent="center" alignItems="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl w="500px" isRequired isInvalid={errors.name}>
            <FormLabel htmlFor="first-name"> First name</FormLabel>
            <Input
              {...register('firstName')}
              id="first-name"
              placeholder="First name"
            />
            <FormLabel htmlFor="last-name"> Last name</FormLabel>
            <Input
              {...register('lastName')}
              id="last-name"
              placeholder="Last name"
            />
            <FormLabel htmlFor="email"> Email address</FormLabel>
            <Input id="email" type="email" />
            <FormLabel htmlFor="postcode"> Postcode</FormLabel>
            <Input id="postcode" />
            <FormLabel htmlFor="address"> Address</FormLabel>
            <Input id="address" />
            <FormLabel htmlFor="city"> City</FormLabel>
            <Input id="city" />
            <FormLabel htmlFor="state"> State</FormLabel>
            <Select id="state" placeholder="Select State">
              <option>New South Wales</option>
              <option>Victoria</option>
              <option>Queensland</option>
              <option>South Australia</option>
              <option>Western Australia</option>
              <option>Tasmania</option>
              <option>Northern Territory</option>
              <option>Australia Capital Territory</option>
            </Select>
            <FormLabel htmlFor="payment"> Payment Type</FormLabel>
            <Select id="payment" placeholder="Select payment type">
              <option>VISA</option>
              <option>Mastercard</option>
              <option>Paypal</option>
            </Select>
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            style={{ float: 'right' }}
            mt={4}
            color="#f90"
            bg="#1b1b1b"
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Flex>
    </>
  );
};

export default Checkout;
