import { Box, Image } from '@chakra-ui/react'
// import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
const Feedpost = () => {
  return (
    <>
    <PostHeader />
    <Box my={2}>
      <Image src='/img1.png' alt='user profile' />
    </Box>
    <PostFooter />
    </>
  )
}

export default Feedpost