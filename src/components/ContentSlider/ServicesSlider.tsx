import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

type data = {
  name: string;
};

type Props = {
  heading: string;
  data: data[];
};

export default function ServicesSlider({ heading = "", data = [] }: Props) {
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
        {data.map((d: data, i: number) => (
          <Box
            key={i}
            minWidth={"150px"}
            borderRadius={10}
            height={"150px"}
            bg={"blackAlpha.50"}
          >
            {d.name}
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
