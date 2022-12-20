import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info1.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>BENE</Typography>
        <Typography color={medium}>BENE-TESLA369.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        BENE is a new cryptocurrency that is designed to be a stablecoin. It is
        backed by a basket of assets that includes the US dollar, gold, and
        silver. BENE is a new cryptocurrency that is designed to be a stablecoin.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
