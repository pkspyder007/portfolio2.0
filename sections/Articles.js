import { Center, Heading, Box, Flex, Text, Link, Button } from "@chakra-ui/core";
import { motion } from "framer-motion";
import Image from "next/image"


export default function ArticlesSection() {
  return (
    <Box maxW="1200px" m="auto" mb="10" id="writings" >
      <Center>
        <Heading as="h1" size="4xl">
          <u>Articles</u>
        </Heading>
      </Center>
      <Flex justify="space-around" align="center" mt="10" wrap="wrap" p="5">
        <ArticleBox imgUrl="/images/unboxjs.png" link="" moreText="ReadMore" desc=" We all have that model in our mind that a variable is a box containing some value..." />
        <ArticleBox imgUrl="/images/v1.jpg" link="https://www.youtube.com/watch?v=Jt8WDWbmr-0" moreText="Watch Now" desc="We will create a hook that will give us the posting of cursor on the browser window. " />
        <ArticleBox imgUrl="/images/v2.jpg" link="https://www.youtube.com/watch?v=U73doNKmswg" moreText="Watch Now" desc="We will create a hook that will save the state of our component into the localStorage of browser." />
      </Flex>
    </Box>
  );
}


const ArticleBox = ({ moreText, desc, link, imgUrl}) => {
    return (
        <Box 
            p="2"
            mb="5"
            maxWidth="sm"
            as={motion.div}
            whileHover={{y: -10, transition: { duration: 0.3}}}
        >
            <Image
             src={imgUrl}
                height="sm"
                width="sm"
            />
            <Text fontSize="xl">
           {desc}
            </Text>
            <Link href={link} target="__blank" >
                <Button mt="2" bg="black" color="white" _hover={{color: "black", bg: "lightgrey"}}>{moreText}</Button>
            </Link>
        </Box>
    )
}