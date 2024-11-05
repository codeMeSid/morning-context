import { Box, Typography } from "@mui/material";
import React from "react";
import StyledButton from "./StyledButton";

const StyledHeroTitleContainer = () => {
  return (
    <Box
      sx={(theme) => ({
        overflow: "hidden",
        position: "relative",
        height: theme.spacing(32),
        background: "linear-gradient(90.97deg, #6C7AF7 0%, #A97DF1 99.9%)",
        padding: theme.spacing(4, 2),
      })}
    >
      {/* <Box
        id="center-circle"
        sx={(theme) => ({
          top: "50%",
          left: "50%",
          opacity: 0.4,
          borderRadius: "50%",
          position: "absolute",
          width: theme.spacing(52),
          height: theme.spacing(52),
          transform: "translate(-50%,-50%)",
          zIndex: 1,
          background:
            "linear-gradient(90deg, #55C79A 0%, #907CFF 52.08%, #FC876D 100%)",
        })}
      /> */}
      {/* <Box
        id="right-circle"
        sx={(theme) => ({
          top: "50%",
          right: "25%",
          opacity: 0.4,
          borderRadius: "50%",
          position: "absolute",
          width: theme.spacing(52),
          height: theme.spacing(52),
          transform: "translate(-50%,-50%)",
          zIndex: 1,
          background:
            "linear-gradient(90deg, #55C79A 0%, #907CFF 52.08%, #FC876D 100%)",
        })}
      /> */}
      {/* <Box
        id="left-circle"
        sx={(theme) => ({
          top: "50%",
          left: "25%",
          opacity: 0.4,
          borderRadius: "50%",
          position: "absolute",
          width: theme.spacing(52),
          height: theme.spacing(52),
          transform: "translate(-50%,-50%)",
          zIndex: 1,
          background:
            "linear-gradient(90deg, #55C79A 0%, #907CFF 52.08%, #FC876D 100%)",
        })}
      /> */}

      <Box
        component="fieldset"
        sx={(theme) => ({
          zIndex: 5,
          height: "100%",
          textAlign: "center",
          border: `2px solid ${theme.palette.common.white}`,
          padding: theme.spacing(2),
        })}
      >
        <Typography
          component="legend"
          sx={(theme) => ({
            paddingX: theme.spacing(2),
            textTransform: "uppercase",
            color: theme.palette.common.white,
            letterSpacing: theme.spacing(0.5),
          })}
        >
          our journalism
        </Typography>

        <Typography
          variant="h6"
          sx={(theme) => ({
            color: theme.palette.common.white,
            marginTop: theme.spacing(-1),
            marginBottom: theme.spacing(1),
          })}
        >
          The Morning Context makes you smarter with original, accurate and
          independent journalism.
        </Typography>
        <StyledButton title="subscribe" />
      </Box>
    </Box>
  );
};

export default StyledHeroTitleContainer;
