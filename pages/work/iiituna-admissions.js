import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/core";
import { MdCheckCircle } from "react-icons/md";

const IIITU = () => {
  return (
    <Box maxWidth="1200px" mx="auto" my="10" p="5">
      <Flex justify="center" wrap="wrap-reverse">
        <Box mr="5" my="4">
          <Heading size="3xl" mb="5">
            IIITU-ADMISSIONS
          </Heading>
          <Text fontSize="xl" lineHeight="30px">
            Indian Institute of Information Technology Una is an Institute of National Importance under M.H.R.D India.
            <br />
            Due to the COVID-19 the admissions process for new students was stopped due to lockdown. This project helped the college and student to register and make the admission process online.
          </Text>
          <Text fontSize="xl" lineHeight="30px">
            <u>
           An end to end solution for admission process with admin panel.
            </u>
          </Text>
        </Box>
        <Box mb="5">
          <Image src="/images/ia1.PNG" />
        </Box>
      </Flex>
      {/* tech */}
      <Box mb="10">
        <Text fontSize="6xl" mb="5">
          Tech Stack 👩‍💻
        </Text>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            <strong>React.js</strong>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            <strong>Node.js</strong>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            <strong>MongoDB</strong>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            <strong>Google Email API</strong>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            <strong>OAuth 2</strong>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            <strong>Ant Design System</strong>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            <strong>AWS</strong>
          </ListItem>
        </List>
      </Box>
      {/* role */}
      <Text fontSize="6xl" my="2">
        My Role & Work 🕵️‍♂️
      </Text>
      <Badge my="2" p="2">
        Full Stack Developer
      </Badge>
      <Divider />
      <Text fontSize="6xl" my="2">
        Process ⏳
      </Text>
      <Flex direction="column">
        <Box mb="2">
          <Badge my="2" p="2">
            Setting requirements
          </Badge>
          <Divider />
          {/* <Images src="/images/lq3.PNG" alt="liqrcart-design" /> */}
          <Text fontSize="lg" lineHeight="30px" mt="5">
            The application was to be consumed by two parties one being the students and second the administration of institute.
            <br />
            There was a lot of data and document to be collected and stored for legal purposes hence validating all the data was a necessary part.
            The admisssion was a lengthy process so data persistance was also an important part.
            <br />
            Making sure the student had submiited all the necessary records and uploaded all required and application documents.
            <br /> 
          </Text>
          <Text fontSize="lg" lineHeight="30px" my="5">
            On the admin side showing various stats, updates, getting student records, uploaded documents, generating pdfs, etc.
            <br />
            
          </Text>
        </Box>
        <Box mb="2">
          <Badge my="2" p="2">
            Database modelling
          </Badge>
          <Divider />
          <Text><strong>This was really tough and interesting. 🤒</strong></Text>
          <Text fontSize="lg" lineHeight="30px">
            There was a ton of data to be managed keeping <strong><u>low data redundancy</u></strong>
            there were approx. 15 different forms to be submiited and uploaded. The tricky part waas some of them were mandatory and others not. On top of that few forms were applicable for certain students.
            <br />
            Keeping track of on which step a student currently is.
            <br />
          </Text>
        </Box>
        <Box mb="2">
          <Badge my="2" p="2">
            Bridging end with an API
          </Badge>
          <Divider />
          {/* <Text fontSize="lg" lineHeight="30px">
            So we have out frontend components and database models now comes my
            favourite part working on combining both of them through a rest api.
            <br />
            This was also really challenging part. I needed to{" "}
            <u>
              <strong>avoid as much code duplication</strong>
            </u>{" "}
            as i could.
          </Text> */}
          <br />
          <Text fontSize="lg" lineHeight="30px">
            <u>
              <strong>Securing the API</strong>
            </u>{" "}
            was also a curcial part. For this i went with{" "}
            <u>
              <strong>JSON Web Tokens</strong>
            </u>{" "}
            and{" "}
            <u>
              <strong>custom express.js middlewares</strong>
            </u>{" "}
            for checkin the authentication of the request.
          </Text>
        </Box>
      </Flex>
      {/* outcomes */}
      <Text fontSize="6xl" mb="5">
        Outcome 😍
      </Text>
      <Divider />
      <Flex direction="column">
        <Text fontSize="lg" lineHeight="30px">
          A{" "}
          <u>
            <strong>A really helpful platform for students and institute</strong>
          </u>{" "}
          that helped them to continue the admission process with ease and maintain COVID-19 guidelines.
        </Text>
        <br />
      </Flex>
    </Box>
  );
};

export default IIITU;
