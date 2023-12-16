import { Box, Container, Flex, Tooltip } from "@chakra-ui/react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Feedpost from "../../components/FeedPosts/Feedpost";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={40}>
        <Box flex={2} py={10} >
          <Feedpost />
          <Feedpost />
          <Feedpost />
          <Feedpost />
        </Box>

		Suggested users
      </Flex>

      <Tooltip
        hasArrow
        label={"Home"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Link
          display={"flex"}
          to={"/"}
          as={RouterLink}
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          {/* <AiFillHome size={25} /> */}
          {/* <Box display={{ base: "none", md: "block" }}>Home</Box> */}
        </Link>
      </Tooltip>
    </Container>
  );
};

export default HomePage;
