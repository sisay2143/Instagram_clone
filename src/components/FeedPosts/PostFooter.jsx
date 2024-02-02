// import React from 'react'

import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";

const PostFooter = ({ post,  username, isProfilePage }) => {
  

  const { isCommenting, handlePostComment } = usePostComment();
	const [comment, setComment] = useState("");
	const authUser = useAuthStore((state) => state.user);
	const commentRef = useRef(null);
	const { handleLikePost, isLiked, likes} = useLikePost(post);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleSubmitComment = async () => {
		await handlePostComment(post.id, comment);
		setComment("");
	};

  return (
    <Box my={8} mt={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"4"}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box cursor={"pointer"} fontSize={18}>
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
           onChange={(e)=> setComment(e.target.value)}
           value={comment}
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
             isLoading={iscomm}
           >
             Post
           </Button>
         </InputRightElement>
       </InputGroup>
     </Flex>
     )}
    </Box>
  );
};

export default PostFooter;
