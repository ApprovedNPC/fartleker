import { Flex, Text, Image, Card } from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import ProfilePage from "./Profile";
export function Content() {
  return (
    <div>
      <Flex w="full" direction={"column"} align="center" gap={"0px"}>
        {/* <NavBar /> */}
        <Flex direction="row" gap="10px" w="full">
          <Flex
            bg={"yellow.100"}
            width="full"
            direction="column"
            align="center"
            color="black"
          >
            Profile
          </Flex>
          <Flex
            bg={"yellow.100"}
            width="full"
            direction="column"
            align="center"
            color="black"
          >
            Feed
          </Flex>
          <Flex
            bg={"yellow.100"}
            width="full"
            direction="column"
            align="center"
            color="black"
          >
            Challenges
          </Flex>
        </Flex>

        <Flex direction="row" gap="10px" w="full">
          <Flex
            bg={"white"}
            width="full"
            direction="column"
            align="center"
            color="black"
          >
            <ProfilePage />
            <Card />
          </Flex>
          <Flex
            bg={"white"}
            width="full"
            direction="column"
            align="center"
            color="black"
          >
            users
          </Flex>
          <Flex
            bg={"white"}
            width="full"
            direction="column"
            align="center"
            color="black"
          >
            Training Plans
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
    </div>
  );
}
