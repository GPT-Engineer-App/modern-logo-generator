import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaMagic } from "react-icons/fa";

const Index: React.FC = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={6}>
        Welcome to the Logo Generator
      </Heading>
      <Text fontSize="xl" mb={6}>
        Create clean, modern graphics in multiple styles with ease.
      </Text>
      <Flex justify="center">
        <Link to="/generate">
          <Button colorScheme="teal" size="lg" rightIcon={<FaMagic />}>
            Generate Your Logo
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Index;