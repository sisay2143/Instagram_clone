// import React from 'react'

import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const SuggestedUsers = () => {
  const { isloading, suggestedUsers} = useGetSuggestedUsers();
  if(isloading) return null;
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

        {suggestedUsers.map((user) => (
				<SuggestedUser user={user} key={user.id} />
			))}

        
        <Flex
						// onClick={handleLogout}
						alignItems={"center"}
						gap={4}
						_hover={{ bg: "whiteAlpha.400" }}
						borderRadius={6}
						py={600}
						w={{ base: 10, md: "full" }}
						mt={"auto"}
						justifyContent={{ base: "center", md: "flex-start" }}
					>
						<Text fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
          C 2023 Built By @Sisbek
        </Text>
					</Flex>
      </VStack>
    </div>
  );
};

export default SuggestedUsers;
