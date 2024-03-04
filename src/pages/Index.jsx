import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaComments, FaBrain, FaHeartbeat } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW={"5xl"}>
        <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
          <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
            Caring for the ones you love with <br />
            <Text as={"span"} color={"green.400"}>
              CloudNurse
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            Revolutionizing nursing home communication, CloudNurse ensures your family stays connected with ease and efficiency. Our AI-driven platform provides personalized responses to keep the conversation going and the care flowing.
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Button as={Link} to="/get-started" rounded={"full"} px={6} colorScheme={"green"} bg={"green.400"} _hover={{ bg: "green.500" }}>
              Get Started
            </Button>
            <Button rounded={"full"} px={6}>
              Learn More
            </Button>
          </Stack>
          <Flex w={"full"}>
            <Image src="https://images.unsplash.com/photo-1522444195799-478538b28823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwaG9tZSUyMGFwcCUyMGludGVyZmFjZXxlbnwwfHx8fDE3MDk1NDExNTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt={"CloudNurse App Interface"} size={"2xl"} rounded={"md"} shadow={"2xl"} />
          </Flex>
        </Stack>
      </Container>

      <Box bg={useColorModeValue("white", "gray.700")}>
        <Container maxW={"5xl"} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={"center"}>
            <Heading>Our Features</Heading>
            <Text>Discover what makes CloudNurse special</Text>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 10, md: 4, lg: 10 }}>
            <Feature icon={<FaComments fontSize={"3em"} />} title={"Seamless Communication"} text={"Stay in touch with your loved ones and their caregivers through a direct line, ensuring constant and clear communication."} />
            <Feature icon={<FaBrain fontSize={"3em"} />} title={"Intelligent AI Responses"} text={"Our AI technology helps generate empathetic and appropriate responses, making conversations with family members more meaningful."} />
            <Feature icon={<FaHeartbeat fontSize={"3em"} />} title={"Health Tracking"} text={"Keep an eye on the well-being of your family members with our health tracking features, ensuring peace of mind."} />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

const Feature = ({ title, text, icon }) => {
  return (
    <Stack align={"center"} textAlign={"center"}>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={"green.500"} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default Index;
