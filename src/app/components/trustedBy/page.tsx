import { TrustedByData } from "@/app/constant/constant";
import {
  DividerWrap,
  MainContainerWapper,
  PrivateStyledTypography,
} from "@/app/styled";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

const TrustedBy = () => {
  return (
    <Box padding={"192px 32px"} bgcolor={"rgb(225, 220, 208)"}>
      <MainContainerWapper maxWidth={"1280px"} margin={"auto"}>
        <Grid container gap="128px" display={"flex"} justifyContent={"center"}>
          <Grid
            xs={12}
            sm={6}
            md={5}
            lg={5}
            xl={5}
            display={"flex"}
            justifyContent={"center"}
          >
            <Image
              src="/images/women.jpg"
              width={584}
              height={560}
              alt="women"
              style={{ borderRadius: "10px" }}
            ></Image>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={5} xl={5}>
            <PrivateStyledTypography
              fs="70px"
              width={"100%"}
              lineHeight={"58px"}
              fc={"rgb(50, 48, 47)"}
            >
              Trusted by over 3 million Canadians
            </PrivateStyledTypography>
            <PrivateStyledTypography
              fs="20px"
              marginTop={"16px"}
              width="91%"
              fontFam={"tiempos_headlinelight"}
              lineheight={"35px"}
              fc={"rgb(50, 48, 47)"}
            >
              Our business model is simple: put our clients’ interests first.
              Sure, that means never charging commissions on trades and offering
              industry-leading interest on your chequing account, but it also
              means a lot more. Like total transparency into your investments
              and an innovative cost structure that ensures we only do well when
              you do.
            </PrivateStyledTypography>
          </Grid>
        </Grid>

        <Grid container display="flex" padding={"128px 32px 0px"}>
          {TrustedByData?.map((item) => {
            return (
              <Grid paddingBottom="24px " xs={12} sm={6} md={4} lg={4} xl={4}>
                <DividerWrap wid="21.5rem" />
                <PrivateStyledTypography
                  fs={"64px"}
                  fw="500"
                  marginBottom={"8px"}
                  fc={"rgb(50, 48, 47)"}
                >
                  {item?.title}
                </PrivateStyledTypography>
                <PrivateStyledTypography
                  fs="24px"
                  fontFam={"futura_ptlight"}
                  fc={"rgb(50, 48, 47)"}
                >
                  {item?.desc}
                </PrivateStyledTypography>
              </Grid>
            );
          })}
        </Grid>
      </MainContainerWapper>
    </Box>
  );
};

export default TrustedBy;
