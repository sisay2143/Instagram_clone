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
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="20px" w={"200px"} />
                <Skeleton height="20px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
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
    </Container>
  );
};

export default Feedposts;
