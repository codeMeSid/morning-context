import { NEWS_CATEGORY_COLOR } from "@/utils/constants";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { Avatar, Box, Divider, Grid2, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";
import StyledImage from "../StyledImage";

interface Props {
  newsCategory: string;
  newsImageSrc: string;
  newsTitle: string;
  newsSnippet: string;
  publisherImageSrc: string;
  publisherName: string;
  newsReadDuration: number;
  commentsCount: number;
  isShort?: boolean;
}

const StyledNewsCard = (props: Props) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography
        variant="button"
        color={NEWS_CATEGORY_COLOR[props.newsCategory]}
        fontWeight="bold"
        sx={(theme) => ({ marginBottom: theme.spacing(0.5) })}
      >
        {props.newsCategory}
      </Typography>
      {!props.isShort && (
        <StyledImage
          height={25}
          alt={props.newsTitle}
          src={props.newsImageSrc}
          sx={(theme) => ({ marginBottom: theme.spacing(2) })}
        />
      )}
      <Typography variant="h6" sx={(theme) => ({ fontSize: theme.spacing(3) })}>
        {props.newsTitle}
      </Typography>
      {!props.isShort && (
        <Typography
          variant="subtitle1"
          sx={(theme) => ({
            marginTop: theme.spacing(1),
            fontSize: theme.spacing(1.75),
          })}
        >
          {props.newsSnippet}
        </Typography>
      )}
      <Grid2
        container
        sx={(theme) => ({
          marginY: theme.spacing(1.5),
        })}
      >
        <Grid2 size={4}>
          <Divider
            sx={(theme) => ({
              borderBottom: `1px solid ${
                props.isShort ? purple[600] : theme.palette.common.black
              }`,
            })}
          />
        </Grid2>
      </Grid2>
      <Box
        display="flex"
        sx={(theme) => ({ gap: theme.spacing(1.5), alignItems: "center" })}
      >
        <Avatar
          src={props.publisherImageSrc}
          sx={(theme) => ({
            border: `1px solid ${theme.palette.error.main}`,
          })}
        />
        <Typography sx={{ marginRight: "auto" }}>
          {props.publisherName}
        </Typography>

        {!props.isShort && (
          <React.Fragment>
            <Typography
              variant="body2"
              sx={(theme) => ({
                color: theme.palette.grey[700],
                fontSize: theme.spacing(1.75),
              })}
            >
              {props.newsReadDuration} min read
            </Typography>
            <Divider
              variant="middle"
              orientation="vertical"
              sx={(theme) => ({
                height: theme.spacing(3),
              })}
            />
          </React.Fragment>
        )}

        <ModeCommentOutlinedIcon htmlColor="#E7D6C9" fontSize="small" />
        <Typography
          variant="body2"
          sx={(theme) => ({
            color: theme.palette.grey[700],
            marginLeft: theme.spacing(-0.5),
            fontSize: theme.spacing(1.75),
          })}
        >
          {props.commentsCount}
        </Typography>
      </Box>
    </Box>
  );
};

export default StyledNewsCard;
