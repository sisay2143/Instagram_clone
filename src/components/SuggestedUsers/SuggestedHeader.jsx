import React from "react";
import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
// import useLogout from "../../hooks/useLogout";
// import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

import { Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  // const { handleLogout, isLoggingOut } = useLogout();
  // const authUser = useAuthStore((state) => state.user);

  // if (!authUser) return null;
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a programmer" size={"lg"} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={"bold"}>
          as_aProgrammer__
        </Text>
      </Flex>

      <Button
        size={"xs"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        // onClick={handleLogout}
        // isLoading={isLoggingOut}
        cursor={"pointer"}
      >
        Log out
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
