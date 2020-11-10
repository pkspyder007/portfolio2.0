import { Center, Heading, Box, Flex } from "@chakra-ui/core";
import { motion } from "framer-motion";
import Project from "../components/Project";


export default function ProjectsSection() {
  return (
    <Box maxW="1200px" m="auto" mb="10">
      <Center>
        <Heading size="2xl">
          <u>My Work</u>
        </Heading>
      </Center>
      <Flex justify="space-around" mt="10" wrap="wrap">
        <Box as={motion.div}
            whileHover={{y: -10, transition: { duration: 0.3}}}
        >
            <Project />
        </Box>
        <Box as={motion.div}
             whileHover={{y: -10, transition: { duration: 0.3}}}
        >
            <Project />
        </Box>
        <Box as={motion.div}
            whileHover={{y: -10, transition: { duration: 0.3}}}
        >
            <Project />
        </Box>    
      </Flex>
    </Box>
  );
}
