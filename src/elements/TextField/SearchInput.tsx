import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

type Props = {
  placeholder: string;
};

export default function SearchInput({ placeholder = "" }) {
  return (
    <Box
      position={"relative"}
      width={"100%"}
      height={"60px"}
      bg={"#F5F5F5"}
      display={"flex"}
      alignItems={"center"}
    >
      <Input height={"100%"} width={"100%"} placeholder={placeholder} />
      <IconButton
        aria-label="Search"
        icon={<FiSearch />}
        width={"50px"}
        height={"80%"}
        position={"absolute"}
        right={"10px"}
        bg={"green.200"}
      />
    </Box>
  );
}
