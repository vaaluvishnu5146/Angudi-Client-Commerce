import React from "react";
import { Box } from "@chakra-ui/react";
import BottomBar from "@/components/BottomBar/BottomBar";
import Head from "next/head";

type Props = {
  params: { slug: string };
  children: React.ReactNode;
};

export default function BottomBarLayout({ children }: Props) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" href="../styles/Home.module.css" />
      </Head>
      <main>
        <Box>
          {children}
          <BottomBar />
        </Box>
      </main>
    </>
  );
}
