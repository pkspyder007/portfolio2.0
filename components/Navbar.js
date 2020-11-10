import { Box, Heading, Flex, Link } from "@chakra-ui/core";
import { Link as ReachLink} from "@reach/router";

export default function Navbar() {
    return (
        <Box as="nav" mt="4">
            <Flex justify="space-around" align="center">
                <Heading>Hello</Heading>
                <Flex justify="space-between">
                    <Link as={ReachLink} to="/" mr="6"><Box as="strong">work</Box></Link>
                    <Link as={ReachLink} to="/" mr="6"><Box as="strong">about</Box></Link>
                    <Link as={ReachLink} to="/" mr="6"><Box as="strong">article</Box></Link>
                    <Link as={ReachLink} to="/"><Box as="strong">contact</Box></Link>
                </Flex>
            </Flex>
        </Box>
    )
}