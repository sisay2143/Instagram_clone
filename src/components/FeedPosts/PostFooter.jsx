// import React from 'react'

import {
<<<<<<< HEAD
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";

import {
=======
>>>>>>> 2b3dd16e5a43453af78cdb681da90fb5118ab975
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
<<<<<<< HEAD
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
import { timeAgo } from "../../utils/timeAgo";
// import CommentsModal from "../Modals/CommentsModal";

const PostFooter = ({ post, username, isProfilePage }) => {
  // const [liked, setLiked] = useState(false);
  // const [likes, setLikes] = useState(1000);

  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState("");
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);
  const { handleLikePost, isLiked, likes } = useLikePost(post)
  // // const { handleLikePost, isLiked, likes } = useLikePost(post);
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };
 
  return (
    <Box my={8} mt={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"4"}>
        <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}>
=======
} from "@chakra-ui/react";
import { useState } from "react";

import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";

const PostFooter = ({ username, isProfilePage }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };
  return (
    <Box my={8} mt={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"4"}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box cursor={"pointer"} fontSize={18}>
>>>>>>> 2b3dd16e5a43453af78cdb681da90fb5118ab975
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontSize={"sm"} fontWeight={600}>
        {likes} likes
      </Text>
      {!isProfilePage && (
        <>
          <Text fontSize={"sm"} fontWeight={600}>
            {username}{" "}
            <Text as="span" fontWeight={400}>
              Feeling good
            </Text>
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            view all 1,000 comments
<<<<<<< HEAD
          </Text>
        </>
      )}

      {authUser && (
        <Flex
          alignItems={"center"}
          gap={2}
          justifyContent={"space-between"}
          w={"full"}
        >
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder="Add a comment ..."
              fontSize={14}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              ref={commentRef}
            />
            <InputRightElement>
              <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                bg={"transparent"}
                onClick={handleSubmitComment}
                isLoading={isCommenting}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
=======
          </Text> 
        </>
      )}

      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder="Add a comment ..."
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
>>>>>>> 2b3dd16e5a43453af78cdb681da90fb5118ab975
    </Box>
  );
};

export default PostFooter;
