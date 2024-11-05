import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

interface Props {
  id: string;
  rotateAngle: number;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  colorList: { color: string; coverPercentage: string }[];
}

const StyledGradientIcon = (props: Props) => {
  const { Icon } = props;
  return (
    <>
      <svg style={{ position: "absolute" }} width={0} height={0}>
        <linearGradient
          id={props.id}
          x1={1}
          y1={0}
          x2={1}
          y2={1}
          gradientTransform={`rotate(${props.rotateAngle})`}
        >
          {props.colorList.map((colorItem, colorItemIndex) => (
            <stop
              key={colorItemIndex}
              stopColor={colorItem.color}
              offset={colorItem.coverPercentage}
            />
          ))}
        </linearGradient>
      </svg>
      <Icon fontSize="small" sx={{ fill: `url(#${props.id})` }} />
    </>
  );
};

export default StyledGradientIcon;
