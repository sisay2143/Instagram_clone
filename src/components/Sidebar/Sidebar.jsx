import { Avatar, Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";

import { BiLogOut } from "react-icons/bi";
// import useLogout from "../../hooks/useLogout";
// import SidebarItems from "./SidebarItems";
import { AiFillHome } from "react-icons/ai";
const Sidebar = () => {
  const SidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/auth",
    },

    {
      icon: <SearchLogo size={25} />,
      text: "search",
      link: "/",
    },

    {
      icon: <NotificationsLogo size={25} />,
      text: "Notifications",
      link: "/",
    },

    {
      icon: <CreatePostLogo size={25} />,
      text: "create",
      link: "/",
    },

    {
      icon: <Avatar size={"sm"} name="Sisay Bekele" src="/profilepic.png" />,
      text: "Profile",
      link: "/auth",
    },
  ];
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
        >
          <InstagramLogo />
        </Link>
       
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={10}
          cursor="pointer"
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {SidebarItems.map((item, index) => (
            <Tooltip
              hasArrow
              label={item.text}
              placement="right"
              key={index}
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={"item.lind || null"}
                as={RouterLink}
                alignItems={"center"}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
                gap={4}
               
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        <Tooltip
          hasArrow
          label={"Logout"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Link
            display={"flex"}
            to={"/auth"}
            as={RouterLink}
            alignItems={"center"}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            gap={4}
            mt={"auto"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <BiLogOut size={25} />
            <Box display={{ base: "none", md: "block" }}>Logout</Box>
          </Link>
        </Tooltip>
        {/* LOGOUT */}
        {/* <Flex
            onClick={handleLogout}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            mt={"auto"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <BiLogOut size={25} />
            <Button
              display={{ base: "none", md: "block" }}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              isLoading={isLoggingOut}
            >
              Logout
            </Button>
          </Flex> */}
        {/* </Tooltip> */}
      </Flex>
    </Box>
  );
};

export default Sidebar;
