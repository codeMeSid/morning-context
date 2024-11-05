import { Typography } from "@mui/material";
import React from "react";

const StyledFooterCompany = () => {
  return (
    <React.Fragment>
      <Typography
        sx={(theme) => ({ fontSize: theme.spacing(2.25), cursor: "pointer" })}
      >
        Company
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(1.75),
          marginTop: theme.spacing(2),
        })}
      >
        About
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(1.75),
          marginTop: theme.spacing(2),
        })}
      >
        Leadership
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(1.75),
          marginTop: theme.spacing(2),
        })}
      >
        Investors
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(1.75),
          marginTop: theme.spacing(2),
        })}
      >
        Team
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(1.75),
          marginTop: theme.spacing(2),
        })}
      >
        Editorial code of conduct
      </Typography>
    </React.Fragment>
  );
};

export default StyledFooterCompany;
