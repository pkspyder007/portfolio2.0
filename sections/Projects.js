import { Center, Heading, Box, Flex } from "@chakra-ui/core";
import { motion } from "framer-motion";
import Project from "../components/Project";


export default function ProjectsSection() {
  return (
    <Box as="section" id="work" maxW="1200px" minH="720px" m="auto" mb="10">
      <Center>
        <Heading size="4xl">
          <u>My Work</u>
        </Heading>
      </Center>
      <Flex justify="space-around" align="center" mr="auto" mt="10" wrap="wrap">
        <Box as={motion.div}
            whileHover={{y: -10, transition: { duration: 0.3}}}
        >
            <Project
              title="LiqrCart"
              cat="E-Commerce"
              imgUrl="/images/lq1.PNG"
              imageAlt="LiqrCart"
              github={null}
              liveUrl={null}
              caseStudy="/work/liqrcart"
            />
        </Box>
        <Box as={motion.div}
             whileHover={{y: -10, transition: { duration: 0.3}}}
        >
            <Project
              title="IIITU-Admission"
              cat="Education Management"
              imgUrl="/images/ia1.PNG"
              imageAlt="IIITU-admission"
              github={null}
              liveUrl="http://117.252.73.57"
              caseStudy="/work/iiituna-admissions"
            />
        </Box>
        <Box as={motion.div}
            whileHover={{y: -10, transition: { duration: 0.3}}}
        >
             <Project
              title="GitBlack"
              cat="E-Education"
              imgUrl="/images/gb1.PNG"
              imageAlt="LiqrCart"
              github={null}
              liveUrl={null}
              caseStudy="https://gitblack.com"
            />
        </Box>    
      </Flex>
    </Box>
  );
}
