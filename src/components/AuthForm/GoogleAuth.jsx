import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const GoogleAuth = () => {
  return (
    <>
           <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" w={5} alt="google logo" />
            <Text mx={"2"} color={"blue.500"}>
              Login with Google
            </Text>
          </Flex>

    </>
  )
}

export default GoogleAuth