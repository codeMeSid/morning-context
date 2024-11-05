"use client";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, Typography } from "@mui/material";
import StyledButton from "./StyledButton";

const StyledTopNavbar = () => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        height: theme.spacing(7),
        padding: theme.spacing(1),
        gap: theme.spacing(1.5),
      })}
    >
      <IconButton>
        <MenuIcon sx={(theme) => ({ color: theme.palette.common.black })} />
      </IconButton>
      <Box
        sx={(theme) => ({
          height: "100%",
          borderRadius: "50%",
          width: theme.spacing(5),
          background:
            "linear-gradient(90deg, #55C79A 0%, #907CFF 52.08%, #FC876D 100%)",
        })}
      />
      <Typography
        variant="caption"
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          lineHeight: theme.spacing(1.75),
          letterSpacing: theme.spacing(0.5),
        })}
      >
        <span>The</span>
        <span>Morning</span>
        <span>Context</span>
      </Typography>

      <IconButton sx={{ marginLeft: "auto" }}>
        <SearchIcon sx={(theme) => ({ color: theme.palette.common.black })} />
      </IconButton>
      <StyledButton title="sign up" />
    </Box>
  );
};

export default StyledTopNavbar;
