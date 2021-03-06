import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 840 593" {...props}>
      <defs>
        <style>{`.cls-1{fill:#ffeb3d;}`}</style>
      </defs>
      <path
        className="cls-1"
        d="M4040 5514c-530-50-920-222-1269-559-165-159-383-447-412-546-17-55 2-114 50-156 52-46 640-493 676-514 17-10 47-21 67-24 66-12 110 19 223 157 134 164 316 346 385 384 239 133 579 124 805-21 136-87 205-193 205-315 0-228-119-370-440-523-340-163-657-472-764-745-47-118-60-204-60-387-1-168-1-171 28-228 52-105 3-97 595-97 492 0 517 1 548 19 45 28 83 99 93 174 10 83 40 153 106 254 88 136 160 198 377 328 441 263 615 450 725 782 51 152 66 249 66 428-1 262-57 458-202 700-279 467-855 820-1444 884-90 10-275 12-358 5zM3595 1661c-47-29-76-66-86-108-11-50-11-976 0-1027 12-48 64-103 111-117 22-6 217-9 547-7 501 3 512 3 540 24 15 11 38 36 51 54l22 33v1054l-22 33c-13 18-36 43-51 54-28 21-38 21-555 24-501 2-528 1-557-17z"
        transform="matrix(.1 0 0 -.1 0 593)"
      />
    </Svg>
  );
};

export default Icon;
