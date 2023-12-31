import React, { useState, useEffect } from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import BottomBarLayout from "@/layouts/BottomBarLayout";
import CategorySlider from "@/components/ContentSlider/CategorySlider";
import ServicesSlider from "@/components/ContentSlider/ServicesSlider";
import ScrollableLists from "@/components/Lists/ScrollableLists";
import AppBar from "@/components/AppBar/AppBar";
import { FiMenu, FiBell } from "react-icons/fi";
import SearchInput from "@/elements/TextField/SearchInput";
import { foodType } from "@/Interfaces";

export const getServerSideProps: GetServerSideProps<{
  result: any;
}> = async () => {
  const responses = await Promise.all([
    await fetch(`${process.env.BASE_PATH_FRONTEND}/api/food`),
    await fetch(`${process.env.BASE_PATH_FRONTEND}/api/categories`),
  ]);
  const food = await responses[0].json();
  const categories = await responses[1].json();
  return {
    props: {
      result: {
        foodData: food,
        categoriesData: categories,
      },
    },
  };
};

function ServiceDetails(props: any) {
  const { result } = props;
  const { foodData, categoriesData } = result;
  const [products, setProducts] = useState([]);
  const [categorySelected, setSelectedCategory] = useState("All");

  useEffect(() => {
    setProducts(foodData);
  }, [foodData, categoriesData]);

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
        <Box height={"5px"}></Box>
        <Box padding={"0 15px"} boxSizing="border-box">
          <SearchInput placeholder="Search your Favourite Food" />
        </Box>
        <Box height={"20px"}></Box>
        <CategorySlider
          data={categoriesData}
          selected={categorySelected}
          handleSelect={setSelectedCategory}
        />
        <Box height={5}></Box>
        <Box
          id="today-special"
          paddingInlineStart={"15px"}
          boxSizing="border-box"
        >
          <ServicesSlider
            heading="Today Special"
            data={products.filter((d: foodType) => d.isSpecial)}
          />
        </Box>
        <Box height={"15px"}></Box>
        <Box padding={"0 15px"} boxSizing="border-box">
          <ScrollableLists
            heading="Today Menu"
            data={
              categorySelected === "All"
                ? products
                : products.filter(
                    (d: foodType) => d.foodCategory.name === categorySelected
                  )
            }
          />
        </Box>
      </Box>
    </>
  );
}

ServiceDetails.PageLayout = BottomBarLayout;

export default ServiceDetails;
