import React from "react";
import {
  CommonButton,
  DividerWrap,
  HeadingTypography,
  MainContainerWapper,
  PrivateStyledTypography,
} from "../../styled";
import { getStartedData } from "../../constant/constant";
import { Box, Divider, Grid } from "@mui/material";

const GetStarted = () => {
  return (
    <Box padding="0px 32px 192px" maxWidth={"1280px"} margin={"auto"} >
      <MainContainerWapper display="flex" pad="0px 32px">
        <MainContainerWapper
          width="30%"
          display="flex"
          flexDirection={"column"}
          justify="center"
         
        >
          <HeadingTypography >Your money’s worth more</HeadingTypography>
          <PrivateStyledTypography
            fs="24px"
            fw="600"
            marginTop="16px"
            marginBottom={"40px"}
            width={"34rem"}
            fc="rgb(50, 48, 47)"
            fontFam={"futura_ptlight"}
          >
            Get the most out of your money with smart investing products and
            personalized advice to build long-<br></br>term wealth.
          </PrivateStyledTypography>
          <CommonButton maxWid="189px">Get Started</CommonButton>
        </MainContainerWapper>
        <MainContainerWapper width="70%">
          <video
            autoPlay
            muted
            loop
            style={{ width: "100%", height: "fit-content" }}
          >
            <source src="https://videos.ctfassets.net/v44fuld738we/4O1t1pDSSIGGfpEYqXKyrR/e8939ff9d413bdb3864e10178ef80921/homeHeroEvoEvergreen-en-CA.webm" />
          </video>
        </MainContainerWapper>
      </MainContainerWapper>

      <Grid container display="flex" padding={"0px 32px "}>
        {getStartedData?.map((item) => {
          return (
            <Grid paddingBottom="24px " xs={12} sm={6} md={4} lg={4} xl={4}>
              <DividerWrap wid="22rem"/>
              <PrivateStyledTypography
                fs={"28.1752px"}
                fw="600"
                marginBottom={"8px"}
                fc="rgb(50, 48, 47)"
                fontFam={"futura_ptlight"}

              >
                {item?.title}
              </PrivateStyledTypography>
              <PrivateStyledTypography
                fs="22.1752px"
                fontFam={"futura_ptlight"}
                style={{ maxWidth: "365px" }}
              >
                {item?.desc}
              </PrivateStyledTypography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default GetStarted;
