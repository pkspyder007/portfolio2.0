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

export default function Liqrcart() {
  return (
    <Box maxWidth="1200px" mx="auto" my="10" p="5">
      <Flex justify="center" wrap="wrap-reverse">
        <Box mr="5" my="4">
          <Heading size="3xl" mb="5">
            LiqrCart
          </Heading>
          <Text fontSize="xl" lineHeight="30px">
            LiqrCart is an India based startup currently in prototyping phase.
            It emerged to solve the problem of unavailibility of beverages due
            lockdown imposed in bar and pubs due to COVID-19. It helps the
            vendors to sell their beverages online through an e-commerce portal.
          </Text>
          <Text fontSize="xl" lineHeight="30px">
            LiqrCart connected local wine and other beverages shop with their
            regular customers who were unable to get the service due to the
            lockdown.
          </Text>
        </Box>
        <Box mb="5">
          <Image src="/images/lq1.PNG" />
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
            <strong>Google API</strong>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            <strong>InstaMojo (Payments gateway)</strong>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            <strong>MSG91 (SMS gateway)</strong>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            <strong>Heroku</strong>
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
      <Flex direction="column">
        <Text fontSize="lg" lineHeight="30px">
          As the only technical person on the team i was responsible from
          development to deployment phase.
        </Text>
        <Text fontSize="lg" lineHeight="30px">
          I worked closely with the designer and made sure that the designs were
          feasable as per our initially thought of making a{" "}
          <u>
            <strong>PWA</strong>
          </u>{" "}
          in React.js
        </Text>
        <Text fontSize="lg" lineHeight="30px">
          I also worked with the marketing team to get the feedback of not only
          our initial customer but also vendors.
        </Text>
      </Flex>
      {/* process */}
      <Text fontSize="6xl" my="2">
        Process ⏳
      </Text>
      <Flex direction="column">
        <Box mb="2">
          <Badge my="2" p="2">
            Breaking down the design
          </Badge>
          <Divider />
          <Image src="/images/lq3.PNG" alt="liqrcart-design" />
          <Text fontSize="lg" lineHeight="30px" mt="5">
            95% of our audience was mobile users as they lack high speed internet connectivity.
            So keeping the UI as close as a native app was the best option and this allowed me to <u><strong>re-use</strong></u>
            &nbsp; multiple components across the application.
          </Text>
          <Text fontSize="lg" lineHeight="30px" my="5">
            The project had 3 levels of users. Client, Vender and The Admin. <br />
            The vendor and admin section shared a lot of similar components and logic as product views, stats, etc.
          </Text>
          <Text fontSize="lg" lineHeight="30px">
            The next step was to make the application<u><strong> responsive</strong></u> for the web users. <u><strong>Although 95% of the client were on mobile but we cannot leave the 5% out.</strong></u>
          </Text>
        </Box>
        <Box mb="2">
          <Badge my="2" p="2">
            Database modelling
          </Badge>
          <Divider />
          <Image src="/images/lq4.PNG" alt="liqrcart-db-design" />
          <Text fontSize="lg" lineHeight="30px">
            I took my whiteboard and tried to come up with some main entities the app we will be having. Laid them on the whiteboard and created some relationship with each other. 
            <br />
            For example:
            <br />
            An user should be able to access all his/her previous orders and each order should have the details of the products. 
            <br />
            Now the product should have a refrence to the shop from where it originated and similarly with the payments. Who did the payment, what they paid for, whome the paid, etc.
          </Text>
        </Box>
        <Box mb="2">
          <Badge my="2" p="2">
            Briding end with an API
          </Badge>
          <Divider />
          <Image src="/images/lq5.PNG" alt="liqrcart-db-design" />
          <Text fontSize="lg" lineHeight="30px">
            So we have out frontend components and database models now comes my favourite part working on combining both of them through a rest api.
            <br />
            This was also really challenging part. I needed to <u><strong>avoid as much code duplication</strong></u> as i could.
          </Text>
          <br />
          <Text fontSize="lg" lineHeight="30px">
            <u><strong>Securing the API</strong></u> was also a curcial part. For this i went with <u><strong>JSON Web Tokens</strong></u> and <u><strong>custom express.js middlewares</strong></u> for checkin the authentication of the request.
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
          A <u><strong>fully functional e-commerce platform</strong></u> prototype for clients, vendors and the administration.
          <br />
          A beautiful analytical admin dashboard with modern features critical to an e-commerce platform.
        </Text>
        <br />
        <Text fontSize="lg" lineHeight="30px">
         <strong>A lot of new learning experience</strong>
        </Text>
      </Flex>
    </Box>
  );
}
