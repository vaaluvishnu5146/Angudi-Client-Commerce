import Link from "next/link";
import React from "react";
import { FiHome, FiGift, FiUser, FiShoppingCart } from "react-icons/fi";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function BottomBar() {
  const router = useRouter();
  console.log(router);
  return (
    <Box
      w="100%"
      bg="green.200"
      position={"fixed"}
      bottom={0}
      left={0}
      right={0}
      height={"60px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Link href={"/restaurant/2"}>
          <FiHome
            style={{
              fontSize: "1.4rem",
            }}
          />
        </Link>
      </Box>
      <Box
        padding={"12px"}
        borderRadius={"10px"}
        bg={router.pathname === "/play" ? "white" : ""}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Link href={"/play"}>
          <FiGift
            style={{
              fontSize: "1.4rem",
            }}
          />
        </Link>
      </Box>
      <Box
        padding={"12px"}
        borderRadius={"10px"}
        bg={router.asPath === "/account/2" ? "white" : ""}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Link href="/account/2">
          <FiUser
            style={{
              fontSize: "1.4rem",
            }}
          />
        </Link>
      </Box>
      <Box
        padding={"12px"}
        borderRadius={"10px"}
        bg={router.pathname === "/cart" ? "white" : ""}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Link href="/cart">
          <FiShoppingCart
            style={{
              fontSize: "1.4rem",
            }}
          />
        </Link>
      </Box>
    </Box>
  );
}
