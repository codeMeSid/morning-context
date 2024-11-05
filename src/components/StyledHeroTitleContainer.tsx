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
      <Box
        component="fieldset"
        sx={(theme) => ({
          zIndex: 4,
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
            fontWeight: 900,
            marginTop: theme.spacing(-1),
            marginBottom: theme.spacing(1),
            color: theme.palette.common.white,
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
