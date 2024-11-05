import { Box } from "@mui/material";
import React from "react";

interface Props {
  ListItemComponent: React.ElementType;
  data: (Record<string, unknown> | Array<unknown>)[];
}

export default function StyledHorizontalScroll(props: Props) {
  const { ListItemComponent, data = [] } = props;
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        display: "grid",
        listStyle: "none",
        overflowX: "scroll",
        gap: theme.spacing(2),
        gridAutoFlow: "column",
        padding: theme.spacing(0),
        "&::before,&::after": {
          content: '""',
          width: theme.spacing(1),
        },
      })}
    >
      {data?.map((dataItem, dataItemIndex) => {
        return (
          <ListItemComponent
            {...dataItem}
            key={dataItemIndex}
            index={dataItemIndex}
          />
        );
      })}
    </Box>
  );
}
