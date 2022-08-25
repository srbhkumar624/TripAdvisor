import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";
import React from "react";

const Discover = () => {
  return (
    <div>
      <Box height="600px" bgColor={"#FAF1ED"}>
        <Box width={"80%"} margin="auto">
          <Flex justifyContent={"space-between"} alignItems="center">
            <Box
              marginTop="100px"
              marginLeft={"40px"}
              width={"400px"}
              height="400px"
              bgColor={"white"}
            >
              <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-c/2560x500/25/19/e6/54/caption.jpg?w=400&h=-1&s=1" />
              <Text marginTop={"20px"} textAlign={"center"}>
                By{" "}
                <Link href="https://www.tripadvisor.in/Profile/VisitAbuDhabi">
                  Visit Abu Dhabi
                </Link>{" "}
              </Text>
              <Text textAlign="center">
                Your{" "}
                <Link href="https://www.tripadvisor.in/Trips/115559525">
                  {" "}
                  Guide to an Action-
                  <br />
                  Packed Summer in Abu Dhabi
                </Link>
              </Text>
            </Box>
            <Box
              marginTop="100px"
              marginLeft={"40px"}
              width={"400px"}
              height="400px"
              bgColor={"white"}
            >
              <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-c/2560x500/25/19/e6/98/caption.jpg?w=400&h=-1&s=1" />
              <Text marginTop={"20px"} textAlign={"center"}>
                By{" "}
                <Link href="https://www.tripadvisor.in/Profile/VisitAbuDhabi">
                  Visit Abu Dhabi
                </Link>{" "}
              </Text>
              <Text textAlign={"center"}>Uncovering Abu Dhabi</Text>
            </Box>
            <Box
              marginTop="100px"
              marginLeft={"40px"}
              width={"400px"}
              height="400px"
              bgColor={"white"}
            >
              <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-c/2560x500/25/19/e5/e2/caption.jpg?w=400&h=-1&s=1"></Img>
              <Text marginTop={"20px"} textAlign={"center"}>
                By{" "}
                <Link href="https://www.tripadvisor.in/Profile/VisitAbuDhabi">
                  Visit Abu Dhabi
                </Link>{" "}
              </Text>
              <Text textAlign={"center"}>A Summer's Dream in Abu Dhabi</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Discover;
