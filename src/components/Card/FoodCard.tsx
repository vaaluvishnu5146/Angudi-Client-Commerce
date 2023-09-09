import React from "react";
import Image from "next/image";
import { Box, Flex, ListItem, Text } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { foodType } from "@/Interfaces";
import SmartCta from "@/elements/Button/Button";

type Props = {
  data: foodType;
};

export default function FoodCard({ data }: Props) {
  return (
    <ListItem
      bg={"blackAlpha.50"}
      width={"100%"}
      minHeight="120px"
      borderRadius={10}
    >
      <Flex height={"100%"} padding={"10px"} boxSizing="border-box">
        <Box width={"25%"} height={"100px"} position={"relative"}>
          <Image layout="fill" objectFit="cover" src={data.image} alt="food" />
        </Box>
        <Box width={"5%"}></Box>
        <Box width={"70%"}>
          <Text fontSize="lg" fontWeight={"500"}>
            {data.name}
          </Text>
          <Text fontSize="sm" fontWeight={"400"}>
            {data.foodType}
          </Text>
          <Text fontSize="xs" fontWeight={"300"}>
            {data.description}
          </Text>
          <Box height={"10px"}></Box>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Box>
              <Text fontSize="lg" fontWeight={"500"} letterSpacing={"1px"}>
                ₹{data.price}
              </Text>
            </Box>
            <SmartCta
              size={"sm"}
              variant={"solid"}
              bg={"green.200"}
              label="Add"
              onClick={() => {}}
              disabled={false}
              leftIcon={<FiPlus />}
            />
          </Flex>
        </Box>
      </Flex>
    </ListItem>
  );
}
