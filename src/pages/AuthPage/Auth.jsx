import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";
// import React from 'react'

function Auth() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* left */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={600} alt="phone img" />
          </Box>
          {/* right side */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app. </Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image
                src="/playstore.png"
                h={10}
                alt="playstpre logo"
              />
              <Image src="/microsoft.png" h={10} alt="M logo" />
            </Flex>
          </VStack>
        </Flex>

      </Container>
    </Flex>
  );
}

export default Auth;
