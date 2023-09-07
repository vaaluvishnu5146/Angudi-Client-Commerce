import BottomBarLayout from "@/layouts/BottomBarLayout";
import React from "react";
import { Box } from "@chakra-ui/react";
import CategorySlider from "@/components/ContentSlider/CategorySlider";
import Head from "next/head";
import ServicesSlider from "@/components/ContentSlider/ServicesSlider";
import ScrollableLists from "@/components/Lists/ScrollableLists";
import AppBar from "@/components/AppBar/AppBar";
import { FiMenu, FiBell } from "react-icons/fi";
import SearchInput from "@/elements/TextField/SearchInput";

function ServiceDetails() {
  return (
    <>
      <Head>
        <title>Restaurant Details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className="flex" height={"100vh"}>
        <AppBar
          prefix={
            <FiMenu
              style={{
                fontSize: "1.4rem",
              }}
            />
          }
          brandName="Dominos Pizza"
          suffix={
            <FiBell
              style={{
                fontSize: "1.4rem",
              }}
            />
          }
        />
        <Box height={10}></Box>
        <CategorySlider />
        <Box height={5}></Box>
        <Box
          id="today-special"
          paddingInlineStart={"15px"}
          boxSizing="border-box"
        >
          <ServicesSlider
            heading="Today Special"
            data={[
              { name: "x" },
              { name: "x" },
              { name: "x" },
              { name: "x" },
              { name: "x" },
              { name: "x" },
              { name: "x" },
              { name: "x" },
              { name: "x" },
              { name: "x" },
            ]}
          />
        </Box>
        <Box height={5}></Box>
        <Box padding={"0 15px"} boxSizing="border-box">
          <SearchInput placeholder="Search your Favourite Food" />
        </Box>
        <Box height={5}></Box>
        <Box padding={"0 15px"} boxSizing="border-box">
          <ScrollableLists
            heading="Today Menu"
            data={["", "", "", "", "", "", "", "", "", ""]}
          />
        </Box>
      </Box>
    </>
  );
}

ServiceDetails.PageLayout = BottomBarLayout;

export default ServiceDetails;
