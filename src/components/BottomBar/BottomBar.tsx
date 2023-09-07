import { Box } from "@chakra-ui/react";
import React from "react";

export default function BottomBar() {
  return (
    <Box
      w="100%"
      bg="green.200"
      position={"fixed"}
      bottom={0}
      left={0}
      right={0}
      height={"60px"}
    >
      Bottom Bar
    </Box>
  );
}
