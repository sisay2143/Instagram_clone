import { Avatar, Box, Button, Flex, Link, VStack } from "@chakra-ui/react";
// import React from 'react'
// import SuggestedHeader from "./SuggestedHeader";
// import { useState } from "react";
import useFollowUser from "../../hooks/useFollowUser";
import useAuthStore from "../../store/authStore";

const SuggestedUser = ({ user, setUser }) => {
  // const [isFollowed, setIsFollowed] = useState(false);

  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);
  const authUser = useAuthStore((state) => state.user);

  const onFollowUser = async () => {
    await handleFollowUser();
    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((follower) => follower.uid !== authUser.uid)
        : [...user.followers, authUser],
    });
  };
 
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to ={`/${user.username}`}>

        <Avatar src={user.profilePicURL} size={"md"} />
        </Link>
        <VStack spacing={1} alignItems={"flex-start"}>
        <Link to ={`/${user.username}`}>
          <Box fontSize={12} fontWeight={"bold"}>
            {user.fullName}
          </Box>
        </Link>
          <Box fontSize={11} color={"gray.500"}>
            {user.followers.length} followers
          </Box>
        </VStack>
      </Flex>
      {authUser.uid !== user.uid && (
        <Button
          fontSize={13}
          bg={"transparent"}
          p={0}
          h={"max-content"}
          fontWeight={"medium"}
          color={"blue.500"}
          cursor={"pointer"}
          _hover={{ color: "white" }}
          onClick={onFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing ? "unfollow" : "follow"}
        </Button>
      )}
    </Flex>
  );
};

export default SuggestedUser;
