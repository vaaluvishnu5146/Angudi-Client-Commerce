import React from "react";
import { Box, Text, List } from "@chakra-ui/react";
import Image from "next/image";
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
        {data.length > 0 ? (
          data.map((d, i) => <FoodCard key={`${d.name}-${i}`} data={d} />)
        ) : (
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"200px"}
          >
            <Box position={"relative"} width={"150px"} height={"150px"}>
              <Image
                style={{ borderRadius: 10 }}
                layout="fill"
                objectFit="cover"
                src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-food-box-vector-icon-delivery-sign-logo-retail-paper-vector-png-image_31290264.png"
                alt="food"
              />
            </Box>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              No Matches Found
            </Text>
          </Box>
        )}
      </List>
    </Box>
  );
}
