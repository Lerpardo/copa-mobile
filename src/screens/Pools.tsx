import { Icon, VStack } from "native-base";
import { Octicons } from "@expo/vector-icons";

import { Button } from "../components/Button";
import { Header } from "../components/Header";

export function Pools() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus bolões" />
      <VStack
        borderBottomWidth={1}
        borderBottomColor="gray.600"
        mb={4}
        mt={6}
        mx={5}
        pb={4}
      >
        <Button
          title="BUSCAR BOLÂO POR CÒDIGO"
          leftIcon={
            <Icon as={Octicons} name="search" color="black" size="md" />
          }
        />
      </VStack>
    </VStack>
  );
}
