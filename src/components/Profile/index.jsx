import React from "react";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
function ProfilePage() {
  return (
    <Center>
      <Grid placeItems="center" minH="90vh" mb="100px">
        <Image src="src/components/Profile/images/DefaultPfp.png" />
      </Grid>
    </Center>
  );
}

export default ProfilePage;
