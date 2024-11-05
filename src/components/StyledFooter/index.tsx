import {
  alpha,
  Box,
  Container,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";
import StyledFooterTitle from "./StyledFooterTitle";
import StyledFooterSocial from "./StyledFooterSocial";
import StyledFooterCategory from "./StyledFooterCategory";
import StyledFooterSubscription from "./StyledFooterSubscription";
import StyledFooterCompany from "./StyledFooterCompany";
import StyledFooterCompanyInfo from "./StyledFooterCompanyInfo";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const StyledFooter = () => {
  return (
    <Box
      display="flex"
      component="footer"
      flexDirection="column"
      sx={(theme) => ({
        gap: theme.spacing(4),
        paddingY: theme.spacing(3),
        background: theme.palette.common.black,
      })}
    >
      <StyledFooterTitle />
      <StyledFooterSocial />
      <Divider
        sx={(theme) => ({
          borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.5)}`,
        })}
      />
      <Container sx={(theme) => ({ color: theme.palette.common.white })}>
        <Grid2 container sx={(theme) => ({ gap: theme.spacing(5) })}>
          <Grid2 size={5} display="flex" flexDirection="column">
            <StyledFooterCategory />
          </Grid2>
          <Grid2 size={5} display="flex" flexDirection="column">
            <StyledFooterSubscription />
          </Grid2>
          <Grid2 size={5} display="flex" flexDirection="column">
            <StyledFooterCompany />
          </Grid2>
          <Grid2 size={5} display="flex" flexDirection="column">
            <StyledFooterCompanyInfo />
          </Grid2>
        </Grid2>
      </Container>
      <Divider
        sx={(theme) => ({
          borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.5)}`,
        })}
      />
      <Box>
        <Typography
          textAlign="center"
          sx={(theme) => ({
            cursor: "pointer",
            fontSize: theme.spacing(2),
            color: theme.palette.common.white,
          })}
        >
          ©2020 Slowform Pte Limited
        </Typography>
        <Typography
          textAlign="center"
          sx={(theme) => ({
            cursor: "pointer",
            fontSize: theme.spacing(1.75),
            marginTop: theme.spacing(1),
            color: alpha(theme.palette.common.white, 0.8),
          })}
        >
          68 Circular Road, #02-01, 049422, Singapore
        </Typography>
      </Box>
      <Divider
        sx={(theme) => ({
          borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.5)}`,
        })}
      />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={(theme) => ({ gap: theme.spacing(1) })}
      >
        <Typography
          textAlign="center"
          sx={(theme) => ({
            cursor: "pointer",
            fontSize: theme.spacing(2),
            color: theme.palette.common.white,
            textDecoration: "underline",
          })}
        >
          Terms of service
        </Typography>
        <FiberManualRecordIcon
          sx={(theme) => ({
            color: theme.palette.common.white,
            fontSize: theme.spacing(1),
          })}
        />
        <Typography
          textAlign="center"
          sx={(theme) => ({
            cursor: "pointer",
            fontSize: theme.spacing(2),
            color: theme.palette.common.white,
            textDecoration: "underline",
          })}
        >
          Privacy policy
        </Typography>
      </Box>
    </Box>
  );
};

export default StyledFooter;
