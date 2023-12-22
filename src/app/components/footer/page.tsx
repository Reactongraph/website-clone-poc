import { FooterData } from "@/app/constant/constant";
import {
  CommonButton,
  MainContainerWapper,
  PrivateStyledTypography,
} from "@/app/styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";

const Footer = () => {
  return (
    <>
      <MainContainerWapper
        maxWidth={"1280px"}
        margin={"auto"}
        display="flex"
        justify="center"
        pad="64px 32px 32px"
      >
        {FooterData?.map((item) => {
          return (
            <MainContainerWapper>
              <PrivateStyledTypography
                fs={"18px"}
                fw="500"
                marginBottom={"8px"}
                fc={"#32302f"}
                fontFam={"futura_ptmedium"}
              >
                {item?.item}
              </PrivateStyledTypography>
              {item?.options?.map((ele) => {
                return (
                  <PrivateStyledTypography
                    fs={"18px"}
                    fw="500"
                    marginBottom={"8px"}
                    fontFam={"futura_ptlight"}
                    fc={"#32302f"}
                  >
                   {` ${ele?.title? ele?.icon: ""}${ele?.title? ele?.title: ""}`}
                  </PrivateStyledTypography>
                );
              })}
            </MainContainerWapper>
          );
        })}
        <CommonButton
          bg="#fff"
          brdr="1px solid #32302f"
          fc="#32302f"
          maxWid="150px"
        >
          English <KeyboardArrowDownIcon />
        </CommonButton>
      </MainContainerWapper>
    </>
  );
};

export default Footer;
