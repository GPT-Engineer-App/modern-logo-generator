import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Select, Text } from "@chakra-ui/react";
import { FaMagic } from "react-icons/fa";

const GenerateLogo: React.FC = () => {
  const [companyName, setCompanyName] = useState("");
  const [style, setStyle] = useState("modern");

  const handleGenerateLogo = () => {
    // Placeholder for logo generation logic
    console.log(`Generating logo for ${companyName} in ${style} style`);
  };

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={6}>
        Generate Your Logo
      </Heading>
      <Flex direction="column" align="center" mb={6}>
        <Input
          placeholder="Enter your company name"
          size="lg"
          mb={4}
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <Select size="lg" mb={4} value={style} onChange={(e) => setStyle(e.target.value)}>
          <option value="modern">Modern</option>
          <option value="classic">Classic</option>
          <option value="minimalist">Minimalist</option>
        </Select>
        <Button colorScheme="teal" size="lg" rightIcon={<FaMagic />} onClick={handleGenerateLogo}>
          Generate Logo
        </Button>
      </Flex>
      <Text fontSize="xl">
        Your generated logo will appear here.
      </Text>
    </Box>
  );
};

export default GenerateLogo;