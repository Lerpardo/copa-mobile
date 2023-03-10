import { Heading, Text, VStack } from "native-base";

import Logo from "../assets/logo.svg";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function FindGuess() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Buscar por código" showBackButton/>
      <VStack mt={8} mx={5} alignItems="center">
        <Logo />

        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          my={8}
          textAlign="center"
        >
          Encontre um bolão através de{'\n'} seu código único.
        </Heading>

        <Input mb={2} placeholder="Qual o código do bolão?" />

        <Button title="BUSCAR BOLÂO" />
      </VStack>
    </VStack>
  );
}
