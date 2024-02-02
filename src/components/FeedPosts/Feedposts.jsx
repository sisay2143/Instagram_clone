// import React from "react";
import { useEffect, useState } from "react";
import Feedpost from "./Feedpost";
import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const Feedposts = () => {
  const {isLoading, posts} = useGetFeedPosts();
 
  return (
    <Container maxW={"container.sm"} py={10} px={20}>
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="20px" w={"200px"} />
                <Skeleton height="20px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"400px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && posts.length> 0 && posts.map((post) => <Feedpost key = {post.id} post = {post} />)}
      
   
    </Container>
  );
};

export default Feedposts;
