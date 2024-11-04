import { Button, SxProps, Theme } from "@mui/material";

interface Props {
  title: string;
  sx?: SxProps<Theme>;
}

const StyledButton = (props: Props) => {
  return (
    <Button
      sx={(theme) => ({
        color: theme.palette.common.white,
        background: "linear-gradient(90.97deg, #43CEBD 0%, #6FB5E9 99.9%)",
        paddingX: theme.spacing(2.5),
        letterSpacing:theme.spacing(0.25)
      })}
    >
      {props.title}
    </Button>
  );
};

export default StyledButton;
