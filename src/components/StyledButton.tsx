import { Button, SxProps, Theme } from "@mui/material";

interface Props {
  title: string;
  sx?: SxProps<Theme>;
  fullWidth?: boolean;
}

const StyledButton = (props: Props) => {
  return (
    <Button
      sx={(theme) => ({
        ...(props.fullWidth ? { width: "100%" } : {}),
        paddingX: theme.spacing(2.5),
        color: theme.palette.common.white,
        letterSpacing: theme.spacing(0.25),
        background: "linear-gradient(90.97deg, #43CEBD 0%, #6FB5E9 99.9%)",
      })}
    >
      {props.title}
    </Button>
  );
};

export default StyledButton;
