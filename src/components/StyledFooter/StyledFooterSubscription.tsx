import { Typography } from "@mui/material";
import React from "react";

const StyledFooterSubscription = () => {
  return (
    <React.Fragment>
      <Typography
        sx={(theme) => ({ fontSize: theme.spacing(2.25), cursor: "pointer" })}
      >
        Subscription
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(1.75),
          marginTop: theme.spacing(2),
        })}
      >
        Individual Plans
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(1.75),
          marginTop: theme.spacing(2),
        })}
      >
        Corporate Plans
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(1.75),
          marginTop: theme.spacing(2),
        })}
      >
        Student Plans
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(1.75),
          marginTop: theme.spacing(2),
        })}
      >
        Gifting
      </Typography>
    </React.Fragment>
  );
};

export default StyledFooterSubscription;
