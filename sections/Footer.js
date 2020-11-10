import { Box, Flex, Link, Text, } from "@chakra-ui/core";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <Box mt="5" mb="5">
      <Flex justify="space-around" align="center">
        <Text fontSize="xl" color="grey.500">
          by Praveen Kumar 🎈
        </Text>
        <Box>
          <Flex>
            <Box mr="2">
              <Link href="https://github.com/pkspyder007">
                <AiFillGithub size="36" />
              </Link>
            </Box>
            <Box mr="2">
              <Link href="#linkedIN">
                <AiFillLinkedin size="36" />
              </Link>
            </Box>
            <Box mr="2">
              <Link href="https://instagram.com/pkspyder007">
                <AiFillInstagram size="36" />
              </Link>
            </Box>
            <Box mr="2">
              <Link href="https://twitter.com/pkspyder007">
                <AiFillTwitterSquare size="36" />
              </Link>
            </Box>
            <Link href="https://www.youtube.com/channel/UCApeS8qFr_iegt-FrdIq8mw">
              <AiFillYoutube size="36" />
            </Link>
          </Flex>
        </Box>
        <Link href="mailto:praveenkr.564@gmail.com">
          <Text fontWeight="bold">praveenkr.564@gmail.com</Text>
        </Link>
      </Flex>
    </Box>
  );
}
