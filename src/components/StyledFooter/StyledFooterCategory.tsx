import { Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";

const StyledFooterCategory = () => {
  return (
    <React.Fragment>
      <Typography
        sx={(theme) => ({ fontSize: theme.spacing(2.25), cursor: "pointer" })}
      >
        Categories
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(2),
          marginTop: theme.spacing(2),
        })}
        variant="button"
        color="error"
      >
        internet
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(2),
          marginTop: theme.spacing(1),
        })}
        variant="button"
        color="success"
      >
        business
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(2),
          marginTop: theme.spacing(1),
          color: purple[500],
        })}
        variant="button"
      >
        chaos
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(2),
          marginTop: theme.spacing(1),
        })}
        variant="button"
        color="warning"
      >
        newsletters
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(1.75),
          marginTop: theme.spacing(1),
        })}
      >
        All Stories
      </Typography>
    </React.Fragment>
  );
};

export default StyledFooterCategory;
