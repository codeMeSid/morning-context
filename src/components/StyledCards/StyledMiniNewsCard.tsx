import { calculateDateTimeDifference } from "@/utils/calculateDateTimeDifference";
import { Box, Paper, Typography } from "@mui/material";

interface Props {
  isBreakingNews: boolean;
  postedDateTime: Date;
  newsTitle: string;
}

const StyledMiniNewsCard = (props: Props) => {
  const { isBreakingNews } = props;
  return (
    <Paper
      variant="outlined"
      sx={(theme) => ({
        cursor: "pointer",
        width: theme.spacing(35),
        padding: theme.spacing(2),
        bgcolor: theme.palette.background.paper,
      })}
    >
      <Box
        display="flex"
        alignItems="center"
        sx={(theme) => ({ gap: theme.spacing(1.25) })}
      >
        {!isBreakingNews && (
          <Typography
            variant="body2"
            sx={(theme) => ({
              width: "max-content",
              textTransform: "uppercase",
              padding: theme.spacing(0.25, 1),
              color: theme.palette.common.white,
              bgcolor: theme.palette.error.main,
            })}
          >
            Breaking
          </Typography>
        )}
        <Typography
          variant="body2"
          sx={(theme) => ({ color: theme.palette.grey[700] })}
        >
          {calculateDateTimeDifference(props.postedDateTime)}
        </Typography>
      </Box>
      <Typography
        sx={(theme) => ({
          fontWeight: "bold",
          whiteSpace: "wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          height: theme.spacing(6.5),
          marginTop: theme.spacing(1),
          fontSize: theme.spacing(1.6),
        })}
      >
        {props.newsTitle}
      </Typography>
    </Paper>
  );
};

export default StyledMiniNewsCard;
