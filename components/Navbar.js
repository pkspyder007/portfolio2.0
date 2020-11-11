import { Box, Heading, Flex, Link } from "@chakra-ui/core";
import { Link as ReachLink} from "next/link";

export default function Navbar() {
    return (
        <Box as="nav" mt="4" minH="5vh">
            <Flex justify="space-around" align="center">
                <Link as={ReachLink} href="/">
                    <Heading>Hello 👋 </Heading>
                </Link>
                <Flex justify="space-between">
                    <Link as={ReachLink} href="/#work" mr="6"><Box as="strong">work</Box></Link>
                    <Link as={ReachLink} href="/#writings" mr="6"><Box as="strong">article</Box></Link>
                    <Link href="mailto:praveenkr.564@gmail.com"><Box as="strong">contact</Box></Link>
                </Flex>
            </Flex>
        </Box>
    )
}