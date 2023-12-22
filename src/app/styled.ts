import styled from "@emotion/styled";
import { Box, Button, Divider, Typography } from "@mui/material";
import {
  CommonButtonProps,
  MainContainerWapperProps,
  PrivateStyledTypographyProps,
  DividerProps
} from "./interface";

export const MainContainerWapper = styled(Box)(
  {},
  ({
    display,
    justify,
    align,
    pad,
    margin,
    lineHeight,
    width,
  }: MainContainerWapperProps) => ({
    display: `${display || "block"}`,
    justifyContent: `${justify || "flex-start"}`,
    alignItems: `${align || "stretch"}`,
    padding: `${pad || "0"}`,
    margin: `${margin || "0"}`,
    lineHeight: `${lineHeight || "normal"}`,
    width: `${width || "100%"}`,
  })
);

export const PrivateStyledTypography = styled(Typography)(
  {},
  ({
    fc,
    fw,
    fontFam,
    lineheight,
    word,
    cursor,
    fs,
  }: PrivateStyledTypographyProps) => ({
    fontFamily: `${fontFam || "tiempos_headlineregular"} !important`,
    fontStyle: "normal",
    fontWeight: `${fw || "400"}`,
    lineHeight: `${lineheight || "normal"}`,
    color: `${fc || "#000"} !important`,
    whiteSpace: `${word || "inherit"}`,
    cursor: `${cursor || "default"}`,
    fontSize: `${fs || "16px"}`,
  })
);

export const HeadingTypography = styled(Typography)`
  font-size: 84px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: normal;
  width:32rem;
  color: rgb(50, 48, 47);
 font-family: tiempos_headlineregular
`;

export const CommonButton = styled(Button)(
  {},
  ({
    fz,
    bg,
    fc,
    pd,
    brdr,
    hvrColor,
    hvrBackGround,
    hvrBorder,
    maxWid,
    maxH,
    pdMob,
  }: CommonButtonProps) => ({
    fontFamily: "futura_ptmedium",
    fontWeight: 400,
    fontSize: `${fz || "22px"}`,
    fontStyle: "normal",
    lineHeight: "normal",
    background: `${bg || "rgb(50, 48, 47)"}`,
    color: `${fc || "#fff"}`,
    padding: `${pd || "20px 40px"}`,
    borderRadius: "30px",
    border: `${brdr || "none"}`,
    textTransform: "initial",
    maxWidth: `${maxWid || ""}`,
    maxHeight: `${maxH || "67px"}`,
    "&:hover": {
      color: `${hvrColor || "#fff"}`,
      background: `${hvrBackGround || "rgb(50, 48, 47)"}`,
      border: `${hvrBorder || "none"}`,
    },
    "@media screen and (max-width: 576px)": {
      //   padding: pdMob || "10px 40px",
      //   fontSize: fz || "16px",
    },
  })
);

export const DividerWrap = styled(Divider)
(
  {},
  ({
  wid
  }: DividerProps) => ({
    width: `${wid || "100%"}`,
    background: `#000`,
    margin: `0px 0px 24px`
  })
);

