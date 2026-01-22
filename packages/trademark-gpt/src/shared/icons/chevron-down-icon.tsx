import React from "react";

interface ChevronDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  stroke?: string;
}

export const ChevronDownIcon = ({
  size = 16,
  stroke = "currentColor",
}: ChevronDownIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
};
