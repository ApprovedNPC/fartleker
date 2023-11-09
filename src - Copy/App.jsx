//import { Flex, Text, Image } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Login } from "./components/login";
import { Content } from "./components/content";
import { Register } from "./components/register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function Stat() {
//   return (
//     <>
//       <Text>Distance</Text>
//     </>
//   );
// }

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </Router>

    // <Flex w="full" direction={"column"} align="center" gap={"0px"}>
    //   <NavBar />
    //   <Flex direction="row" gap="10px" w="full">
    //     <Flex bg="yellow.100" width="full" direction="column" align="center">
    //       Profile
    //     </Flex>
    //     <Flex bg="yellow.100" width="full" direction="column" align="center">
    //       Feed
    //     </Flex>
    //     <Flex bg="yellow.100" width="full" direction="column" align="center">
    //       Challenges
    //     </Flex>
    //   </Flex>

    //   {/* <Stat />
    //   <Image
    //     src="https://i.stack.imgur.com/wIPlH.jpg"
    //     alt="Prototype map"
    //     width="50%"
    //     rounded="lg"
    //   /> */}
    // </Flex>
  );
}
