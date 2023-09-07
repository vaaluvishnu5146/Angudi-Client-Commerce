import { Box } from "@chakra-ui/react";
import React from "react";
import { FiHome, FiGift, FiUser } from "react-icons/fi";

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
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box
        width={"30%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <FiHome
          style={{
            fontSize: "1.4rem",
          }}
        />
      </Box>
      <Box
        width={"30%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <FiGift
          style={{
            fontSize: "1.4rem",
          }}
        />
      </Box>
      <Box
        width={"30%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <FiUser
          style={{
            fontSize: "1.4rem",
          }}
        />
      </Box>
    </Box>
  );
}
