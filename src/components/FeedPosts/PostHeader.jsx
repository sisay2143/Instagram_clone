import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
// import React from "react";

<<<<<<< HEAD
const PostHeader = ({ post }) => {
=======
const PostHeader = ({ username, avatar }) => {
>>>>>>> 2b3dd16e5a43453af78cdb681da90fb5118ab975
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} alt="user profile pic" size={"sm"} />
        {username}
        <Box color={"gray.500"}>.1w</Box>
      </Flex>
      <Box>
        <Text
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{
            color: "white",
          }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
