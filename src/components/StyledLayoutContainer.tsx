"use client";
import { Box, Container } from "@mui/material";
import React from "react";
import StyledTopNavbar from "./StyledTopNavbar";
import StyledFooter from "./StyledFooter";

interface Props {
  children: React.ReactNode;
}

const StyledLayoutContainer = (props: Props) => {
  return (
    <Container
      disableGutters
      maxWidth="xs"
      sx={(theme) => ({ border: `1px solid ${theme.palette.divider}` })}
    >
      <StyledTopNavbar />
      <Box
        sx={(theme) => ({
          height: `calc(100vh - ${theme.spacing(7.5)})`,
          bgcolor: theme.palette.background.default,
          overflowY: "scroll",
        })}
      >
        {props.children}
        <StyledFooter />
      </Box>
    </Container>
  );
};

export default StyledLayoutContainer;
