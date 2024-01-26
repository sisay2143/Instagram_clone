<<<<<<< HEAD
import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";

const Comment = ({ comment }) => {
  const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy);

  if (isLoading) return <CommentSkeleton />;
  return (
    <div>
      <Flex gap={4}>
        <Link to={`/${userProfile.username}`}>
          <Avatar src={userProfile.profilePicURL} size={"sm"} />
        </Link>
        <Flex direction={"column"}>
          <Flex gap={2} alignItems={"center"}>
            <Link to={`/${userProfile.username}`}>
              <Text fontWeight={"bold"} fontSize={12}>
                {userProfile.username}
              </Text>
            </Link>
            <Text fontSize={14}>{comment.comment}</Text>
          </Flex>
          <Text fontSize={12} color={"gray"}>
            {timeAgo(comment.createdAt)}
=======
import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Comment = ({ createdAt, username, profilePic, text }) => {
  return (
    <div>
      <Flex gap={4}>
        {/* <Link to={`/${userProfile.username}`}> */}
        <Avatar src={profilePic} name={username} size={"sm"} />
        {/* </Link> */}
        <Flex direction={"column"}>
          <Flex gap={2} alignItems={"center"}>
            {/* <Link to={`/${userProfile.username}`}> */}

            <Text fontWeight={"bold"} fontSize={12}>
              {/* {userProfile.username} */}
              {username}
            </Text>
            {/* </Link> */}
            <Text fontSize={14}>{text}</Text>
          </Flex>
          <Text fontSize={12} color={"gray"}>
            {/* {timeAgo(comment.createdAt)} */}
            {createdAt}
>>>>>>> 2b3dd16e5a43453af78cdb681da90fb5118ab975
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default Comment;
<<<<<<< HEAD
const CommentSkeleton = () => {
  return (
    <Flex gap={4} w={"full"} alignItems={"center"}>
      <SkeletonCircle h={10} w="10" />
      <Flex gap={1} flexDir={"column"}>
        <Skeleton height={2} width={100} />
        <Skeleton height={2} width={50} />
      </Flex>
    </Flex>
  );
};
=======
>>>>>>> 2b3dd16e5a43453af78cdb681da90fb5118ab975
