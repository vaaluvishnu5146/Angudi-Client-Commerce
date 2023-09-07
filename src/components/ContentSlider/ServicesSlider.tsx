import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

type Props = {
  heading: string;
  data: Array<{}>;
};

export default function ServicesSlider({ heading = "", data = [] }) {
  return (
    <Box>
      <Text fontSize="xl" fontWeight={"500"} marginBottom={"10px"}>
        {heading}
      </Text>
      <Flex
        className="scroll-container"
        wrap={"nowrap"}
        overflowX={"scroll"}
        columnGap={"15px"}
        overflowY={"scroll"}
      >
        {data.map((d, i) => (
          <Box
            key={i}
            minWidth={"150px"}
            borderRadius={10}
            height={"150px"}
            bg={"blackAlpha.50"}
          ></Box>
        ))}
      </Flex>
    </Box>
  );
}
