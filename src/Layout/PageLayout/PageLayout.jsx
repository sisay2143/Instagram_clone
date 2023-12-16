import { Box, Flex } from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
// import React from 'react'

const PageLayout = ({children}) => {
    const {pathname} = useLocation()
  return (
    <>
        <Flex>
            {pathname !== '/auth'? (
            <Box w={{base:"70px", md:"240px"}}>
                 <Sidebar/>
            </Box>
            ): null}

            <Box flex={1} w={{base:"calc(100%-70)", md:"calc(100%-240px)"}}>
                {children}
            </Box>
        </Flex>

    </>
  )
}

export default PageLayout
// const PageLayoutSpinner = () => {
// 	return (
// 		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
// 			<Spinner size='xl' />
// 		</Flex>
// 	);
// };
