import { ReactNode } from "react";
import { Box, useColorMode } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      bg={colorMode === "dark" ? "gray.700" : ""}
      sx={
        colorMode === "dark"
          ? { boxShadow: "0px 0px 8px 0px green" }
          : { boxShadow: "0px 0px 4px 1px #ccc" }
      }
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
