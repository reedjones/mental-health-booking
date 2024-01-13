import { Box, Button, Container, Flex, Heading, Input, Stack, Text, useToast, VStack, Image, Link, Icon } from "@chakra-ui/react";
import { FaCalendarAlt, FaBook, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  console.log("idenx")
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Dummy implementation for booking an appointment
    toast({
      title: "Appointment Scheduled",
      description: "We've booked your appointment.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  console.log("hello in component react");

  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction="column" align="center" justify="center" minHeight="100vh">
        <VStack spacing={8}>
          <Image src="
          https://images.unsplash.com/photo-1604881991720-f91add269bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBzdXBwb3J0fGVufDB8fHx8MTcwNTA5NTkxMnww&ixlib=rb-4.0.3&q=80&w=1080"
                 borderRadius="md" boxSize='240px'/>
          <Heading as="h1" size="2xl" textAlign="center">
            Mental Health Support Hub
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Your one-stop destination for mental wellness. Book appointments and access resources with ease.
          </Text>

          <form onSubmit={handleSubmit}>
            <Stack spacing={4} direction="column" align="center">
              <Input placeholder="Your Name" />
              <Input placeholder="Preferred Date & Time" type="datetime-local" />
              <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" type="submit">
                Book Appointment
              </Button>
            </Stack>
          </form>

          <Box textAlign="center">
            <Heading as="h3" size="lg" mb={4}>
              Explore Resources
            </Heading>
            <Flex justify="space-around" wrap="wrap">
              <Button as={Link} href="#" leftIcon={<Icon as={FaBook} />} colorScheme="blue">
                Therapy Sessions
              </Button>
              <Button as={Link} href="#" leftIcon={<Icon as={FaInfoCircle} />} colorScheme="green">
                Mental Health Articles
              </Button>
            </Flex>
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
