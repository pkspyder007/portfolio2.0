import {
  Badge,
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/core";
import { MdCheckCircle } from "react-icons/md";

export const CaseStudy = () => {
  return (
    <Box maxWidth="1200px" mx="auto" my="10" p="5">
      <Intro />
      <Tech />
      <Role />
      <Process />
      <Outcome />
    </Box>
  );
};

export const Intro = () => {
  return (
    <Flex justify="center" wrap="wrap-reverse">
      <Box mr="5" my="4">
        <Heading size="3xl" mb="5">
          LiqrCart
        </Heading>
        <Text fontSize="xl" lineHeight="30px">
          Remember I told you that ingredients is a separate entity and is
          referenced by the pizza object. So when we created the newPizza we
          referenced the same entity and on changing the value in newPizza
          changed the entity itself. But both pizzas still referenced the same
          ingredients object. So how to fix this? Actually, it’s quite simple.
        </Text>
      </Box>
      <Box mb="5">
        <Image src="/images/lq1.png" />
      </Box>
    </Flex>
  );
};

export const Tech = () => {
  return (
    <Box mb="10">
      <Text fontSize="6xl" mb="5">
        Tech Stack
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
      </List>
    </Box>
  );
};

export const Role = () => {
  return (
    <>
      <Text fontSize="6xl" mb="5">
        My Role & Work
      </Text>
      <Badge mb="2">Full Stack Developer</Badge>
      <Divider />
      <Flex direction="column">
      <Text fontSize="lg" lineHeight="30px">
          Remember I told you that ingredients is a separate entity and is
          referenced by the pizza object. So when we created the newPizza we
          referenced the same entity and on changing the value in newPizza
          changed the entity itself. But both pizzas still referenced the same
          ingredients object. So how to fix this? Actually, it’s quite simple.
        </Text>
        <Text fontSize="lg" lineHeight="30px">
          Remember I told you that ingredients is a separate entity and is
          referenced by the pizza object. So when we created the newPizza we
          referenced the same entity and on changing the value in newPizza
          changed the entity itself. But both pizzas still referenced the same
          ingredients object. So how to fix this? Actually, it’s quite simple.
        </Text>
      </Flex>
    </>
  );
};


export const Process = () => {
  return (
    <>
      <Text fontSize="6xl" mb="5">
        Process
      </Text>
      <Badge mb="2">Database Modeling</Badge>
      <Divider />
      <Flex direction="column">
      <Text fontSize="lg" lineHeight="30px">
          Remember I told you that ingredients is a separate entity and is
          referenced by the pizza object. So when we created the newPizza we
          referenced the same entity and on changing the value in newPizza
          changed the entity itself. But both pizzas still referenced the same
          ingredients object. So how to fix this? Actually, it’s quite simple.
        </Text>
        <Text fontSize="lg" lineHeight="30px">
          Remember I told you that ingredients is a separate entity and is
          referenced by the pizza object. So when we created the newPizza we
          referenced the same entity and on changing the value in newPizza
          changed the entity itself. But both pizzas still referenced the same
          ingredients object. So how to fix this? Actually, it’s quite simple.
        </Text>
      </Flex>
    </>
  );
};


export const Outcome = () => {
    return (
      <>
        <Text fontSize="6xl" mb="5">
          Outcome
        </Text>
        <Divider />
        <Flex direction="column">
        <Text fontSize="lg" lineHeight="30px">
            Remember I told you that ingredients is a separate entity and is
            referenced by the pizza object. So when we created the newPizza we
            referenced the same entity and on changing the value in newPizza
            changed the entity itself. But both pizzas still referenced the same
            ingredients object. So how to fix this? Actually, it’s quite simple.
          </Text>
          <Text fontSize="lg" lineHeight="30px">
            Remember I told you that ingredients is a separate entity and is
            referenced by the pizza object. So when we created the newPizza we
            referenced the same entity and on changing the value in newPizza
            changed the entity itself. But both pizzas still referenced the same
            ingredients object. So how to fix this? Actually, it’s quite simple.
          </Text>
        </Flex>
      </>
    );
  };