"use client";
import { Box, Container } from "@mui/material";
import React from "react";
import StyledTopNavbar from "./StyledTopNavbar";

interface Props {
  children: React.ReactNode;
}

const LayoutContainer = (props: Props) => {
  return (
    <Container
      disableGutters
      maxWidth="xs"
      sx={(theme) => ({ border: `1px solid ${theme.palette.divider}` })}
    >
      <StyledTopNavbar />
      <Box
        sx={(theme) => ({
          height: `calc(100vh - ${theme.spacing(7)})`,
          bgcolor: theme.palette.background.default,
        })}
      >
        {props.children}
      </Box>
    </Container>
  );
};

export default LayoutContainer;
