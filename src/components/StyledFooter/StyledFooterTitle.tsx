import { Box, Typography } from "@mui/material";
import React from "react";

const StyledFooterTitle = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={(theme) => ({ gap: theme.spacing(2.5) })}
    >
      <Box
        sx={(theme) => ({
          borderRadius: "50%",
          width: theme.spacing(7.5),
          height: theme.spacing(7.5),
          background:
            "linear-gradient(90deg, #55C79A 0%, #907CFF 52.08%, #FC876D 100%)",
        })}
      />
      <Typography
        variant="caption"
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          lineHeight: theme.spacing(2.5),
          color: theme.palette.common.white,
          letterSpacing: theme.spacing(0.5),
        })}
      >
        <span>The</span>
        <span>Morning</span>
        <span>Context</span>
      </Typography>
    </Box>
  );
};

export default StyledFooterTitle;
