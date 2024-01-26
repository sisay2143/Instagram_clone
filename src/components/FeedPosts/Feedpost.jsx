import { Box, Image } from '@chakra-ui/react'
// import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
<<<<<<< HEAD
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
=======
const Feedpost = ({ username, img, avatar}) => {
  return (
    <>
    <PostHeader username = {username} avatar = {avatar } />
    <Box my={2} borderRadius={4} overflow={'hidden'}>
      <Image src={img} alt={username}/>
    </Box>
    <PostFooter username = {username} />
>>>>>>> 2b3dd16e5a43453af78cdb681da90fb5118ab975
    </>
  )
}

export default Feedpost