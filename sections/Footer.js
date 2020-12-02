import { Box, Flex, Link, Text, useUnmountEffect } from "@chakra-ui/core";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import BouncingBall from "../components/BouncingBall";

export default function Footer() {
  return (
    <Box mt="5" mb="5" id="footer">
      <Flex justify="space-around" align="center" wrap="wrap">
        <Flex>
          <Text fontSize="xl" color="grey.500" mb="5">
            by Praveen Kumar
          </Text>
          <BouncingBall>
            <Text fontSize="xl" color="grey.500" mb="5">
              🎈
            </Text>
          </BouncingBall>
        </Flex>
        <Box>
          <Flex>
            <Box mr="2" mb="5">
              <Link href="https://github.com/pkspyder007">
                <AiFillGithub size="36" className="footer_icon" />
              </Link>
            </Box>
            <Box mr="2">
              <Link href="https://www.linkedin.com/in/praveen-kumar-8512b4189/">
                <AiFillLinkedin size="36" className="footer_icon" />
              </Link>
            </Box>
            <Box mr="2">
              <Link href="https://instagram.com/pkspyder007">
                <AiFillInstagram size="36" className="footer_icon" />
              </Link>
            </Box>
            <Box mr="2">
              <Link href="https://twitter.com/pkspyder007">
                <AiFillTwitterSquare size="36" className="footer_icon" />
              </Link>
            </Box>
            <Link href="https://www.youtube.com/channel/UCApeS8qFr_iegt-FrdIq8mw">
              <AiFillYoutube size="36" className="footer_icon" />
            </Link>
          </Flex>
        </Box>
        <Link href="mailto:praveenkr.564@gmail.com" mb="5">
          <Text fontWeight="bold">praveenkr.564@gmail.com</Text>
        </Link>
      </Flex>
    </Box>
  );
}
