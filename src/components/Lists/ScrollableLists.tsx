import React from "react";
import { Box, Text, List, ListItem, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  heading: string;
  data: string[];
};

export default function ScrollableLists({ heading = "", data = [] }: Props) {
  return (
    <Box>
      <Text fontSize="xl" fontWeight={500}>
        {heading}
      </Text>
      <Box height={"10px"}></Box>
      <List spacing={3}>
        {data.map((d, i) => (
          <ListItem
            key={i}
            bg={"blackAlpha.50"}
            width={"100%"}
            minHeight="120px"
            borderRadius={10}
          >
            <Flex height={"100%"} padding={"10px"} boxSizing="border-box">
              <Box width={"20%"} height={"100px"} position={"relative"}>
                <Image
                  style={{ borderRadius: 10 }}
                  //   width={90}
                  //   height={90}
                  layout="fill"
                  objectFit="cover"
                  src={
                    "https://images.unsplash.com/photo-1631628150639-3a7c90a22ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80"
                  }
                  alt="food"
                />
              </Box>
              <Box width={"5%"}></Box>
              <Box width={"75%"}>
                <Text fontSize="lg" fontWeight={"500"}>
                  Chicken Biriyani
                </Text>
                <Text fontSize="sm" fontWeight={"400"}>
                  Chicken Biriyani
                </Text>
                <Text fontSize="xs" fontWeight={"300"}>
                  Chicken is biriyani nis served with Raitha (1 Cup), Salna (1
                  Cup), 1 Egg PC
                </Text>
                <Box height={"10px"}></Box>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  width={"100%"}
                >
                  <Box>
                    <Text
                      fontSize="lg"
                      fontWeight={"500"}
                      letterSpacing={"1px"}
                    >
                      299
                    </Text>
                  </Box>
                  <Button size={"sm"} variant={"solid"} bg={"green.200"}>
                    Add To Order
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
