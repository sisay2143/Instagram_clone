import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

function AuthForm() {
  const [isLogin, setLogin] = useState(true);



  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="instagram" />
         
         {isLogin ? <Login /> : <Signup />}

         {/* {------------OR-------------} */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={1}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={1} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={1} bg={"gray.400"} />
          </Flex>

       <GoogleAuth prefix={isLogin ? "Log in" : "Sign Up"} />
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "sign Up" : "Login"}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default AuthForm;
