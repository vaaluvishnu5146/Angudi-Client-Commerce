import React from "react";
import { Box, Text } from "@chakra-ui/react";

type Props = {
  prefix: React.ReactNode;
  brandName: string;
  suffix: React.ReactNode;
};

export default function AppBar({ prefix, brandName, suffix }: Props) {
  return (
    <Box
      width={"100%"}
      height={"80px"}
      padding={"10px 15px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box width={"10%"}>{prefix}</Box>
      <Box
        width={"80%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text fontSize="xl" fontWeight={500}>
          {brandName}
        </Text>
      </Box>
      <Box
        width={"10%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-end"}
      >
        {suffix}
      </Box>
    </Box>
  );
}
