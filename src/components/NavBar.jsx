import {
  Button,
  Avatar,
  Flex,
  Heading,
  Spacer,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";

export function NavBar() {
  const navColor = useColorModeValue("gray.100", "gray.900");
  const { toggleColorMode } = useColorMode();
  const toggleText = useColorModeValue("dark", "light");

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
      <Button colorScheme="teal">Notifications</Button>
      <Button colorScheme="orange">Log in</Button>
      <Button onClick={toggleColorMode} colorScheme="pink">
        Switch to {toggleText} mode
      </Button>
      <Avatar name="Rocky Wu" src="" />
    </Flex>
  );
}
