import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { foodType } from "@/Interfaces";

type Props = {
  heading: string;
  data: Array<foodType>;
};

export default function ServicesSlider({ heading = "", data }: Props) {
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
        {data.map((d: foodType, i: number) => (
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
                src={d.image}
                alt="food"
              />
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
