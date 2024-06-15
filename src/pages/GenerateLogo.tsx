import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Select, Text, Image } from "@chakra-ui/react";
import { FaMagic } from "react-icons/fa";

const GenerateLogo: React.FC = () => {
  const [companyName, setCompanyName] = useState("");
  const [style, setStyle] = useState("modern");

  const [logoUrl, setLogoUrl] = useState("");

  const handleGenerateLogo = async () => {
    try {
      const response = await fetch("https://api.logo-generator.com/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ companyName, style }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate logo");
      }

      const data = await response.json();
      setLogoUrl(data.logoUrl);
    } catch (error) {
      console.error("Error generating logo:", error);
    }
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
      {logoUrl && (
        <Box mt={6}>
          <Text fontSize="xl" mb={4}>
            Your generated logo:
          </Text>
          <Image src={logoUrl} alt="Generated Logo" />
        </Box>
      )}
    </Box>
  );
};

export default GenerateLogo;