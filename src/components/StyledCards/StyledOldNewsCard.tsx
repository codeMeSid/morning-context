import { NEWS_SEVERITY_COLOR } from "@/utils/constants";
import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  newsSeverity: string;
  newsTitle: string;
  newsSnippet: string;
}

const StyledOldNewsCard = (props: Props) => {
  const { newsSeverity = "medium" } = props;
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        bgcolor: "#F3F5FF",
        minHeight: theme.spacing(22),
        padding: theme.spacing(1.5, 3),
        borderLeft: `4px solid ${NEWS_SEVERITY_COLOR[newsSeverity]}`,
      })}
    >
      <Typography
        sx={(theme) => ({
          fontWeight: "bold",
          fontSize: theme.spacing(2.25),
          lineHeight: theme.spacing(3),
        })}
      >
        {props.newsTitle}
      </Typography>
      <Typography
        sx={(theme) => ({
          fontSize: theme.spacing(2),
          marginTop: theme.spacing(2),
          lineHeight: theme.spacing(3),
        })}
      >
        {props.newsSnippet}
      </Typography>
    </Box>
  );
};

export default StyledOldNewsCard;
