import { Flex, Text, Image } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";

function Stat() {
  return (
    <>
      <Text>Distance</Text>
    </>
  );
}

export default function App() {
  return (
    <Flex w="full" direction={"column"} align="center" gap={"10px"}>
      <NavBar />

      <Stat />
      <Image
        src="https://i.stack.imgur.com/wIPlH.jpg"
        alt="Map of 16 Kensington Rd, Kensington"
        width="50%"
        rounded="lg"
      />
    </Flex>
  );
}
