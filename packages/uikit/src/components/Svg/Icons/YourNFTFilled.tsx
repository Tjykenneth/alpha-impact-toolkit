import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 300 300" {...props}>
      <defs>
        <style>{`.cls-1{fill:#ffeb3d;}`}</style>
      </defs>
      <path
        className="cls-1"
        d="M129.67,116.94q-17.14,0-34.3,0c-8.23,0-12.29-4-12.29-12.09q0-34.52,0-69c0-8,4-12.07,11.86-12.08q34.73,0,69.45,0c7.83,0,11.87,4.13,11.88,12.08q0,34.5,0,69c0,8.09-4.08,12.09-12.3,12.1Q146.82,117,129.67,116.94Zm38.16-46.18c0-11.3-.09-22.59,0-33.89,0-3.43-1-4.77-4.62-4.75q-33.67.16-67.36,0c-3.34,0-4.44,1.23-4.43,4.49q.14,33.68,0,67.36c0,3.64,1.46,4.57,4.82,4.55q33.47-.15,66.94,0c3.52,0,4.71-1.26,4.66-4.72C167.74,92.79,167.83,81.78,167.83,70.76Z"
      />
      <path
        className="cls-1"
        d="M74.4,53.41v8.43c-2.93,0-5.72.09-8.5,0s-4.09,1-4.08,3.95q.09,34.13,0,68.23c0,3.15,1.25,4.2,4.3,4.19q33.9-.1,67.8,0c3.07,0,4.44-1.09,4.28-4.22-.14-2.65,0-5.32,0-8.25h8.38c0,4,.26,8-.06,11.86a10.14,10.14,0,0,1-9.76,9q-36.66.15-73.31,0a10.08,10.08,0,0,1-10-10.1q-.14-36.43,0-72.88A10.2,10.2,0,0,1,63.4,53.44C66.91,53.29,70.44,53.41,74.4,53.41Z"
      />
      <path
        className="cls-1"
        d="M44.71,83.07v8.44c-3.1,0-6,0-9,0-2.49-.06-3.58,1.06-3.58,3.56q0,34.55,0,69.08c0,2.77,1.29,3.71,3.91,3.7q34.32-.06,68.65,0c2.7,0,3.87-1.15,3.79-3.83s0-5.6,0-8.65h8.25c0,4.17.43,8.53-.12,12.76-.6,4.64-5.18,8.1-10,8.11q-36.24.11-72.47,0a10.21,10.21,0,0,1-10.34-10.6q-.09-36,0-72A10.32,10.32,0,0,1,34.22,83.08C37.59,83,41,83.07,44.71,83.07Z"
      />
    </Svg>
  );
};

export default Icon;
