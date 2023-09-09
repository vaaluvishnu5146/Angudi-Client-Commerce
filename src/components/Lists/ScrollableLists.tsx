import React from "react";
import { Box, Text, List } from "@chakra-ui/react";
import { foodType } from "@/Interfaces";
import FoodCard from "../Card/FoodCard";

type Props = {
  heading: string;
  data: foodType[];
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
          <FoodCard key={`${d.name}-${i}`} data={d} />
        ))}
      </List>
    </Box>
  );
}
