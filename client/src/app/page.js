"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import {
  ChakraProvider,
  Button,
  Heading,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Main } from "next/document";

const Home = () => {
  return (
    <main>
      <ChakraProvider>
        <Stack
          direction="column"
          justifyContent={"Center"}
          alignItems={"Center"}
          margin={"100px"}
          padding={"50px"}
        >
          <Heading padding={"50px"} color="gray">
            Welcome To DHL
          </Heading>
          <Wrap spacing={20} margin={"10px"}>
            <ChakraLink href="/login" isInternal>
              <WrapItem>
                <Button
                  colorScheme="gray"
                  padding={"50px"}
                  margin={"20px"}
                  fontSize={24}
                >
                  Login
                </Button>
              </WrapItem>
            </ChakraLink>

            <ChakraLink href="/register" isInternal>
              <WrapItem>
                <Button
                  colorScheme="yellow"
                  padding={"50px"}
                  margin={"20px"}
                  fontSize={24}
                >
                  Register
                </Button>
              </WrapItem>
            </ChakraLink>
          </Wrap>
          <Image
            direction="row"
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/dhl-logo.jpg"
            alt="dhl-logo.jpgs "
            width={180}
            height={180}
            padding={"50px"}
            margin={"50px"}
            priority
          />
        </Stack>
      </ChakraProvider>
    </main>
  );
};
export default Home;
