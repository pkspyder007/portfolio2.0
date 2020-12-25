import { Box, Heading, Flex } from "@chakra-ui/core";
import ReachLink from "next/link";

export default function Navbar() {
  return (
    <>
    <Box as="nav" mt="4" minH="5vh">
      <Flex justify="space-around" align="center">
        <ReachLink href="/">
          <Heading>Hello 👋 </Heading>
        </ReachLink>
        <Flex justify="space-between" >
          <Box as="strong" mr="6">
            <ReachLink href="/#work" >
              work
            </ReachLink>
          </Box>
          <Box as="strong" mr="6">
            <ReachLink href="/#writings" >
              articles
            </ReachLink>
          </Box>
          <Box as="strong" mr="6">
            <ReachLink href="/#footer" >
              contact
            </ReachLink>
          </Box>
        </Flex>
      </Flex>
    </Box>
</>
  );
}
