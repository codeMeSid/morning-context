import { Box, Skeleton, SxProps, Theme, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  alt: string;
  src: string;
  height?: number | string;
  width?: number | string;
  sx?: SxProps<Theme>;
}

const StyledImage = (props: Props) => {
  const theme = useTheme();
  const { width = "100%", height = "100%", alt, src, sx = {} } = props;
  const [isLoading, setIsLoading] = useState(true);

  const parsedHeight =
    typeof height === "string" ? height : theme.spacing(height);
  const parsedWidth = typeof width === "string" ? width : theme.spacing(width);
  return (
    <Box
      sx={{
        ...sx,
        width: parsedWidth,
        position: "relative",
        height: parsedHeight,
      }}
    >
      <Image
        fill
        alt={alt}
        src={src}
        objectFit="cover"
        placeholder="empty"
        style={{ position: "absolute" }}
        onLoad={() => setIsLoading(false)}
        onLoadStart={() => setIsLoading(true)}
      />
      {isLoading && (
        <Skeleton
          variant="rectangular"
          sx={{ height: "100%", width: "100%", position: "position" }}
        />
      )}
    </Box>
  );
};

export default StyledImage;
