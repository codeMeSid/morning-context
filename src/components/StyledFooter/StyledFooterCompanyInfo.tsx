import { Typography } from "@mui/material";
import React from "react";

const StyledFooterCompanyInfo = () => {
  return (
    <React.Fragment>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(1.75),
        })}
      >
        The Morning Context
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(1.75),
        })}
      >
        Blog - On the record
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(1.75),
          marginTop: theme.spacing(1),
        })}
      >
        TMC Subscriber App
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(1.75),
          marginTop: theme.spacing(5.5),
        })}
      >
        Collabrate
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(1.75),
          marginTop: theme.spacing(2),
        })}
      >
        Contact Us
      </Typography>
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          fontSize: theme.spacing(1.75),
          marginTop: theme.spacing(2),
        })}
      >
        FAQs
      </Typography>
    </React.Fragment>
  );
};

export default StyledFooterCompanyInfo;
