import {
  Button,
  Avatar,
  Flex,
  Heading,
  Spacer,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import "boxicons";
import { Link, useNavigate } from "react-router-dom";

export function NavBar() {
  const navColor = useColorModeValue("gray.100", "gray.900");
  const { toggleColorMode } = useColorMode();
  const toggleText = useColorModeValue(
    <box-icon name="moon"></box-icon>,
    <box-icon name="sun"></box-icon>
  );

  return (
    <Flex
      p="1em"
      bg={navColor}
      align="center"
      w="full"
      gap="10px"
      direction="row"
      as="nav"
    >
      <Heading size="md">Fartleker</Heading>
      <Spacer />
      <Button colorScheme="teal">
        <box-icon name="bell"></box-icon>
      </Button>
      <Button onClick={toggleColorMode} colorScheme="pink">
        {toggleText}
      </Button>
      <Link to="/register">
        <Button colorScheme="blue">Register</Button>
      </Link>

      <Link to="/login">
        <Button colorScheme="blue">Login</Button>
      </Link>

      <Link to="/content">
        <Button colorScheme="blue">Content</Button>
      </Link>

      <Avatar name="Rocky Wu" src="" />
    </Flex>
  );
}
