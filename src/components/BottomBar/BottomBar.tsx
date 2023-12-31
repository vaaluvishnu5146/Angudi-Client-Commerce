import Link from "next/link";
import React from "react";
import { FiHome, FiGift, FiUser, FiShoppingCart } from "react-icons/fi";
import { Box } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function BottomBar() {
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      name: "Restaurant",
      path: `/restaurant/${router.query.id}`,
      icon: FiHome,
    },
    {
      name: "Play",
      path: "/play",
      icon: FiGift,
    },
    {
      name: "Account",
      path: `/account/${router.query.id}`,
      icon: FiUser,
    },
    {
      name: "Cart",
      path: "/cart",
      icon: FiShoppingCart,
    },
  ];

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
      {routes.map((route, index) => (
        <Box
          padding={"12px"}
          borderRadius={"10px"}
          bg={pathname === route.path ? "white" : ""}
          key={index}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Link href={route.path}>
            <route.icon
              style={{
                fontSize: "1.4rem",
              }}
            />
          </Link>
        </Box>
      ))}
    </Box>
  );
}
