// import React from 'react'

import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <div>
      <VStack py={8} px={6} gap={2}>
        <SuggestedHeader />

        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>
          <Text
            fontSize={12}
            fontWeight={"bold"}
            _hover={{ color: "gray.400" }}
            cursor={"pointer"}
          >
            see All
          </Text>
        </Flex>

        <SuggestedUser
          name=" Dani Man"
          follower={5676}
          avatar="https://bit.ly/dan-abramov"
        />
        <SuggestedUser
          name=" rooney wayne"
          follower={2388}
          avatar="https://bit.ly/dan-abramov"
        />
        <SuggestedUser
          name=" paul shools"
          follower={1394}
          avatar="https://bit.ly/dan-abramov"
        />

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
          C 2023 Built By @Sisbek
        </Box>
      </VStack>
    </div>
  );
};

export default SuggestedUsers;
