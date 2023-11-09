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
    <Flex w="full" direction={"column"} align="center" gap={"0px"}>
      <NavBar />
      <Flex direction="row" gap="10px" w="full">
        <Flex bg="yellow.100" width="full" direction="column" align="center">
          Profile
        </Flex>
        <Flex bg="yellow.100" width="full" direction="column" align="center">
          Feed
        </Flex>
        <Flex bg="yellow.100" width="full" direction="column" align="center">
          Challenges
        </Flex>
      </Flex>

      {/* <Stat />
      <Image
        src="https://i.stack.imgur.com/wIPlH.jpg"
        alt="Prototype map"
        width="50%"
        rounded="lg"
      /> */}
    </Flex>
  );
}
