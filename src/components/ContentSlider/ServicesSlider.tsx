import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Image from "next/image";

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
            padding={"5px"}
          >
            <Box width={"100%"} height={"100px"} position={"relative"}>
              <Image
                style={{ borderRadius: 10 }}
                layout="fill"
                objectFit="cover"
                src={
                  "https://images.unsplash.com/photo-1631628150639-3a7c90a22ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80"
                }
                alt="food"
              />
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
