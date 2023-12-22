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
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default Comment;
