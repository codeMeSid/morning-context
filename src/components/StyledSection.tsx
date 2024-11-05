import { Theme } from "@emotion/react";
import { Box, Palette, SxProps } from "@mui/material";
import React from "react";

interface Props {
  id: string;
  children: React.ReactNode;
  disableMarginGutter?: boolean;
  disabledPaddingGutter?: boolean;
  backgroundColor?: (palette: Palette) => string;
}

const StyledSection = (props: Props) => {
  const {
    id,
    children,
    backgroundColor,
    disableMarginGutter = false,
    disabledPaddingGutter = false,
  } = props;
  return (
    <Box
      id={id}
      component="section"
      sx={(theme) => ({
        marginTop: theme.spacing(disableMarginGutter ? 0 : 5),
        paddingX: theme.spacing(disabledPaddingGutter ? 0 : 3),
        background: backgroundColor?.(theme.palette),
      })}
    >
      {children}
    </Box>
  );
};

export default StyledSection;
