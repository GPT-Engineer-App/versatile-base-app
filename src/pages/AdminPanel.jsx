import { Box, Container, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Placeholder for logout logic
    navigate("/login");
  };

  return (
    <Container centerContent>
      <VStack spacing={8} mt={24}>
        <Heading as="h1" size="xl" color="blue.700">Admin Panel</Heading>
        <Box w="100%" maxW="md" p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
          <VStack spacing={4}>
            <Text>Welcome to the admin panel!</Text>
            <Button colorScheme="blue" width="full" onClick={handleLogout}>Logout</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default AdminPanel;