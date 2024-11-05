import { calculateDateTimeDifference } from "@/utils/calculateDateTimeDifference";
import { Box, Typography } from "@mui/material";

interface Props {
  isBreakingNews: boolean;
  postedDateTime: Date;
  title: string;
}

const StyledMiniNewsCard = (props: Props) => {
  const { isBreakingNews } = props;
  return (
    <Box
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
          fontSize: theme.spacing(1.5),
          height: theme.spacing(6.5),
          whiteSpace: "wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          marginTop: theme.spacing(1),
        })}
      >
        {props.title}
      </Typography>
    </Box>
  );
};

export default StyledMiniNewsCard;
