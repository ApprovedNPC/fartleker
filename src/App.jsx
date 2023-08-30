import {
  Button,
  Flex,
  Heading,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

function NavBar() {
  const navColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Flex
      p="1em"
      bg={navColor}
      align="center"
      w="full"
      gap="10px"
      direction="row"
    >
      <Heading size="md">Fartleker</Heading>
      <Spacer />
      <Button colorScheme="teal">Notifications</Button>
      <Button colorScheme="orange">Log in</Button>
    </Flex>
  );
}

export default function App() {
  const { toggleColorMode } = useColorMode();
  const toggleText = useColorModeValue("dark", "light");

  return (
    <Flex w="full" direction={"column"} align="center" gap={"10px"}>
      <NavBar />
      <Button onClick={toggleColorMode}>Switch to {toggleText} mode</Button>
    </Flex>
  );
}
