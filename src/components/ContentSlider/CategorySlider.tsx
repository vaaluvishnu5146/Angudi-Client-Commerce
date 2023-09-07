import React, { useState } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

export default function CategorySlider() {
  const data: Array<{ name: string }> = [
    { name: "All" },
    { name: "Pizza" },
    { name: "Burger" },
    { name: "Milk Shakes" },
    { name: "Mojito" },
  ];
  const [categorySelected, setSelectedCategory] = useState("All");

  const getCategories = (data: Array<{ name: string }>) => {
    return data.map((d, i) => (
      <Box
        key={i}
        minWidth={d.name === "All" ? 50 : 120}
        borderRadius={d.name === "All" ? "100%" : 10}
        height={50}
        bg={categorySelected === d.name ? "green.200" : "blackAlpha.50"}
        cursor={"pointer"}
        onClick={() => setSelectedCategory(d.name)}
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
