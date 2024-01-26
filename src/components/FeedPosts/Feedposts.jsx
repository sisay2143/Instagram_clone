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
<<<<<<< HEAD
import useGetFeedPosts from "../../hooks/useGetFeedPosts";
import FeedPost from "./FeedPost";

const Feedposts = () => {
 
	const { isLoading, posts } = useGetFeedPosts();

  return (
    <Container maxW={"container.sm"} py={10} px={20}>
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
=======

const Feedposts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={20}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
>>>>>>> 2b3dd16e5a43453af78cdb681da90fb5118ab975
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="20px" w={"200px"} />
                <Skeleton height="20px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
<<<<<<< HEAD
              <Box h={"400px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
    
    
			{!isLoading && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post={post} />)}
			{!isLoading && posts.length === 0 && (
				<>
					{/* <Text fontSize={"md"} color={"red.400"}>
						Dayuum. Looks like you don&apos;t have any friends.
					</Text>
					<Text color={"red.400"}>Stop coding and go make some!!</Text> */}
				</>
			)} 
=======
              <Box h={"500px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <Feedpost username="samri__" img="/img1.png" avatar="/img1.png" />
          <Feedpost username="sisay_" img="/img2.png" avatar="/img2.png" />
          <Feedpost username="Hermela" img="/img3.png" avatar="/img3.png" />
          <Feedpost username="Temesgen" img="/img4.png" avatar="/img4.png" />
        </>
      )}
>>>>>>> 2b3dd16e5a43453af78cdb681da90fb5118ab975
    </Container>
  );
};

export default Feedposts;
