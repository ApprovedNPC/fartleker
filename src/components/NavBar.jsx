import {
  Button,
  Flex,
  Heading,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";

export function NavBar() {
  const navColor = useColorModeValue("gray.100", "gray.900");

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
    </Flex>
  );
}
