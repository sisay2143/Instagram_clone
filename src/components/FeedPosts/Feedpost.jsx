import { Box, Image } from '@chakra-ui/react'
// import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'
const Feedpost = ({ post }) => {
 const {userProfile} = useGetUserProfileById(post.createdBy)
  return (
    <>
    {/* <PostHeader post = {post}  /> */}
    <Box my={2} borderRadius={4} overflow={'hidden'}>
      <Image src={post.imageURL} alt={"feed post img"}/>
    </Box>
    {/* <PostFooter username = {username} /> */}
    </>
  )
}

export default Feedpost