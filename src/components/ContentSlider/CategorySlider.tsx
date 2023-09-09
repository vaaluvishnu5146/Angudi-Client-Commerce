import React, { useState } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Categories } from "@/Interfaces";

type Props = {
  data: Array<Categories>;
  selected: string;
  handleSelect: (d: string) => void;
};

export default function CategorySlider({
  data = [],
  selected = "All",
  handleSelect,
}: Props) {
  const getCategories = (data: Array<{ name: string }>) => {
    return data.map((d, i) => (
      <Box
        key={i}
        minWidth={d.name === "All" ? 50 : 120}
        borderRadius={d.name === "All" ? "100%" : 10}
        height={50}
        bg={selected === d.name ? "green.200" : "blackAlpha.50"}
        cursor={"pointer"}
        onClick={() => handleSelect(d.name)}
      >
        <Flex
          width={"100%"}
          height={"100%"}
          align={"center"}
          justifyContent={"center"}
        >
          <Box>
            <Text fontSize="sm" fontWeight={500}>
              {d.name}
            </Text>
          </Box>
        </Flex>
      </Box>
    ));
  };

  return (
    <Box>
      <Text
        fontSize="xl"
        fontWeight={"500"}
        marginBottom={"10px"}
        padding={"0 15px"}
      >
        Select Category
      </Text>
      <Flex
        className="scroll-container"
        wrap={"nowrap"}
        overflowX={"scroll"}
        columnGap={"15px"}
        paddingInlineStart={"20px"}
      >
        {getCategories(data)}
      </Flex>
    </Box>
  );
}
