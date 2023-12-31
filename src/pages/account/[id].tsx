import BottomBarLayout from "@/layouts/BottomBarLayout";
import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

function UserAccount() {
  return (
    <Box className="flex">
      <Head>
        <title>Account Details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text>Account Details</Text>
    </Box>
  );
}

UserAccount.PageLayout = BottomBarLayout;

export default UserAccount;
