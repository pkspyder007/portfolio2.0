import { Box, Badge, Link, Heading, Button,} from "@chakra-ui/core"
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image"; 
export default function Project({caseStudy, imageUrl, imageAlt,cat, title, github, liveUrl}) {
    
  
    return (
      <Box maxW="sm" borderWidth="1px" borderColor="grey" overflow="hidden" mb="3">
        <Image src={imageUrl} alt={imageAlt} height="sm" width="sm"  />
  
        <Box p="6" borderTop="2px">
        <Heading
            mt="1"
            fontWeight="semibold"
            as="h2"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Heading>
          <Box my="2" d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {cat}
            </Badge>
          </Box>
           {github && (
              <Box
              mx="2"
              color="gray.500"
            >
              <Link href={github} target="__blank"><AiFillGithub size="24" /></Link>
            </Box>
           )}
           {caseStudy && (
              <Box
              color="gray.500"
            >
              <Link href={caseStudy} target="__blank">
                <Button size="sm">
                  View Project
                </Button>
              </Link>
            </Box>
           )}
        </Box>
      </Box>
    )
  }