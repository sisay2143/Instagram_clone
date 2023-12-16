import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const PostHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src='/img1.png' alt="user profile pic" size={"sm"} />
            as a programmer
            <Box color={"gray.500"}>.1w</Box>
      </Flex>
      <Box >
        <Text fontSize={12}
        color={"blue.500"}
        fontWeight={"bold"}
        _hover={{
          color:"white",
        }
        }
        transition={"0.2s ease-in-out"}
        
         >
          Unfollow
        </Text>
      </Box>
    </Flex>
  )
}

export default PostHeader