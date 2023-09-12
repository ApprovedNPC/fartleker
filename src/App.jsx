import {
  Button,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";

function Stat() {
  return (
    <>
      <Text>Distance</Text>
      <Text>Distance</Text>
    </>
  );
}

export default function App() {
  const { toggleColorMode } = useColorMode();
  const toggleText = useColorModeValue("dark", "light");

  return (
    <Flex w="full" direction={"column"} align="center" gap={"10px"}>
      <NavBar />
      <Button onClick={toggleColorMode}>Switch to {toggleText} mode</Button>
      <Stat />
    </Flex>
  );
}
