import { Avatar, Box, Divider, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

interface Props {
  newsCategory: string;
  newsImageSrc: string;
  newsTitle: string;
  publisherImageSrc: string;
  publisherName: string;
  commentsCount: number;
  index: number;
}

const StyledTopStoryCard = (props: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      sx={(theme) => ({ cursor: "pointer", gap: theme.spacing(1) })}
    >
      <Box
        component="h6"
        sx={(theme) => ({
          fontSize: theme.spacing(4.5),
          color: theme.palette.grey[700],
          marginTop: theme.spacing(3.5),
        })}
      >
        {props.index + 1}
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography
          variant="button"
          color="success"
          fontWeight="bold"
          sx={(theme) => ({ marginBottom: theme.spacing(0.5) })}
        >
          {props.newsCategory}
        </Typography>
        <Box
          sx={(theme) => ({
            position: "relative",
            height: theme.spacing(18),
            width: theme.spacing(31.75),
          })}
        >
          <Image
            fill
            objectFit="cover"
            placeholder="empty"
            alt={props.newsTitle}
            src={props.newsImageSrc}
          />
        </Box>
        <Typography
          variant="h6"
          sx={(theme) => ({
            fontSize: theme.spacing(2),
            marginTop: theme.spacing(2),
          })}
        >
          {props.newsTitle}
        </Typography>
        <Grid2
          container
          sx={(theme) => ({
            marginY: theme.spacing(1.5),
          })}
        >
          <Grid2 size={4}>
            <Divider sx={{ borderBottom: "1px solid black" }} />
          </Grid2>
        </Grid2>
        <Box
          display="flex"
          sx={(theme) => ({ gap: theme.spacing(1.5), alignItems: "center" })}
        >
          <Avatar
            src={props.publisherImageSrc}
            sx={(theme) => ({
              width: theme.spacing(4),
              height: theme.spacing(4),
              border: `1px solid ${theme.palette.error.main}`,
            })}
          />
          <Typography>{props.publisherName}</Typography>
          <ModeCommentOutlinedIcon
            sx={{ marginLeft: "auto" }}
            htmlColor="#E7D6C9"
            fontSize="small"
          />
          <Typography
            variant="body2"
            sx={(theme) => ({
              color: theme.palette.grey[700],
              marginLeft: theme.spacing(-0.5),
            })}
          >
            {props.commentsCount}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StyledTopStoryCard;
