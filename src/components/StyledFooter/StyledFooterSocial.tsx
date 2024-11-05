import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";

const StyledFooterSocial = () => {
  return (
    <Box>
      <Typography
        textAlign="center"
        sx={(theme) => ({ color: theme.palette.common.white })}
      >
        Follow us on
      </Typography>
      <Box
        display="flex"
        justifyContent="space-around"
        sx={(theme) => ({ marginTop: theme.spacing(2) })}
      >
        <FacebookIcon sx={(theme) => ({ color: theme.palette.common.white })} />
        <TwitterIcon sx={(theme) => ({ color: theme.palette.common.white })} />
        <LinkedInIcon sx={(theme) => ({ color: theme.palette.common.white })} />
        <InstagramIcon
          sx={(theme) => ({ color: theme.palette.common.white })}
        />
        <YouTubeIcon sx={(theme) => ({ color: theme.palette.common.white })} />
      </Box>
    </Box>
  );
};

export default StyledFooterSocial;
