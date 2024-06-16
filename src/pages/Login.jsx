import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Placeholder for login logic
    navigate("/admin");
  };

  return (
    <Container centerContent>
      <VStack spacing={8} mt={24}>
        <Heading as="h1" size="xl" color="blue.700">Admin Login</Heading>
        <Box w="100%" maxW="md" p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
          <VStack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button colorScheme="blue" width="full" onClick={handleLogin}>Login</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Login;