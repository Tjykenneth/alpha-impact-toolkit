import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 300 300" {...props}>
      <defs>
        <style>
          {`.farm-1{fill:#fff;}.cls-2{fill:url(#linear-gradient);}.cls-3{fill:url(#linear-gradient-2);}.cls-4{fill:url(#linear-gradient-3);}.cls-5{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:10px;stroke:url(#linear-gradient-4);}`}
        </style>
        <linearGradient
          id="linear-gradient"
          x1="95.81"
          y1="118.7"
          x2="109.76"
          y2="118.7"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffeb3d" />
          <stop offset="0.11" stopColor="#f9e63d" />
          <stop offset="0.26" stopColor="#e8d73d" />
          <stop offset="0.43" stopColor="#cbbf3c" />
          <stop offset="0.62" stopColor="#a39d3c" />
          <stop offset="0.82" stopColor="#71723b" />
          <stop offset="1" stopColor="#3e473a" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="55.2"
          y1="149.83"
          x2="252.2"
          y2="149.83"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-3"
          x1="180.75"
          y1="123.61"
          x2="199.45"
          y2="123.61"
          xlinkHref="#linear-gradient"
        />
        <linearGradient id="linear-gradient-4" x1="10" y1="150" x2="290" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3e473a" />
          <stop offset="0.18" stopColor="#71723b" />
          <stop offset="0.38" stopColor="#a39d3c" />
          <stop offset="0.57" stopColor="#cbbf3c" />
          <stop offset="0.74" stopColor="#e8d73d" />
          <stop offset="0.89" stopColor="#f9e63d" />
          <stop offset="1" stopColor="#ffeb3d" />
        </linearGradient>
      </defs>
      <circle className="farm-1" cx="150" cy="150" r="150" />
      <path
        className="cls-2"
        d="M103.26,147.59a3.92,3.92,0,0,0,1.26-.21,3.87,3.87,0,0,0,2.41-4.92c-8.65-25.19,2.28-46.77,2.4-47a3.88,3.88,0,0,0-6.87-3.59c-.52,1-12.62,24.65-2.86,53.08A3.88,3.88,0,0,0,103.26,147.59Z"
      />
      <path
        className="cls-3"
        d="M61.91,182.41a5.09,5.09,0,0,0,.55,0l4.85-.26c0,.64,0,1.29,0,1.94,0,34.7,27.82,62.93,62,62.93H174.6c30.71,0,56.89-23,61.33-53.72,5.86.76,7.19.85,8.67-.82,2.5-2.81-.08-5.79-1.61-7.58-1.06-1.22-2.57-2.85-4.48-4.84l-1-1,2.53-.38c2.39-.36,4.6-.71,6.2-1l2.11-.39c3.34-.69,3.83-2.81,3.83-4,0-2.56-1.95-3.51-4.19-4.62-1.2-.59-2.68-1.28-4-1.89-.9-.41-2-.93-2.21-1l-2.67-1.56,5.88-1.25a3.87,3.87,0,0,0,.64-7.38l-34.37-13.87c.91-10.28-1.53-23.42-6.45-34.54-3.36-7.6-7.51-13.45-12.16-17.34a4.13,4.13,0,0,0-.11-.69c-4.2-16.49-14.2-35.92-28.59-36.44-6.73-.24-13.49,3.77-19.55,11.61A74.09,74.09,0,0,0,134.64,82c-6.74-7-13.78-10.83-20.45-10.83a18.29,18.29,0,0,0-2.57.19C102,72.82,93.78,82.29,88.55,98.06c-4.33,13.07-6,28.48-4.23,40.2a50.2,50.2,0,0,0,1,5.11l-22.3,4a6.22,6.22,0,0,0-5.39,6,6.36,6.36,0,0,0,5.13,6.14l7.68,1.82L57.52,171.46A5.88,5.88,0,0,0,56,179.08,6.93,6.93,0,0,0,61.91,182.41ZM174.6,239.27H129.27C99.35,239.27,75,214.51,75,184.08c0-.79,0-1.58.06-2.37l11.35-.62C86,182,85.6,183,85.19,184c-3.54,8.59-4.47,11.16-2.33,13.37,1.61,1.66,2.69,1.48,11.09.06,4-.68,9.48-1.66,16.36-2.92,9.45-1.74,19-3.54,22.31-4.18l17.44,8.41a7.47,7.47,0,0,0,3.06.72,7.1,7.1,0,0,0,4.71-1.62l9.09-7.71,35.17,9.56a7.41,7.41,0,0,0,1.82.26h.14a7.17,7.17,0,0,0,4.3-1.41,5.86,5.86,0,0,0,2.08-6.64l-.88-2.53c3.47.54,7.95,1.23,12.41,1.9l6.3.93C224.35,219.11,201.45,239.27,174.6,239.27Zm23.17-129c4.46,10.08,6.74,22.39,5.79,31.37a31.7,31.7,0,0,1-10.74,20.87,27.36,27.36,0,0,1-40.73-4.91,48.63,48.63,0,0,0,4.91-30,73.13,73.13,0,0,0-3.41-13.36c6.4-12,16.75-23.13,26.29-22.13C186.44,92.78,193,99.4,197.77,110.26ZM150.58,69c3.11-4,7.93-8.79,13.14-8.6,5.05.18,9.39,5,12.14,9a64,64,0,0,1,7.41,15.43,22.5,22.5,0,0,0-2.58-.47c-12.15-1.28-23.22,9-30.79,20.79a99.08,99.08,0,0,0-7.65-13.6c-.62-.92-1.24-1.8-1.88-2.66A69.83,69.83,0,0,1,150.58,69ZM95.9,100.49c4.2-12.66,10.34-20.47,16.84-21.42a10,10,0,0,1,1.45-.11c5.65,0,12.37,4.7,18.82,13l0,0q1.39,1.81,2.78,3.87c6.74,10,12,22.85,13.51,32.79,2.89,19.67-7.63,37.56-23.44,39.88a23.06,23.06,0,0,1-3.42.26h0c-14.73,0-27.84-13.63-30.5-31.71C90.45,126.69,92,112.31,95.9,100.49ZM81.56,162.42a3.88,3.88,0,0,0-1.5-6.82l-8.21-1.94,16-2.86c6.46,15.31,19.87,25.78,34.66,25.78h0a31.66,31.66,0,0,0,4.55-.33,32.89,32.89,0,0,0,20.52-11.88,35.06,35.06,0,0,0,50.33,4,39,39,0,0,0,12-18.91L231,158l-3.17.67a3.87,3.87,0,0,0-1.18,7.11l.62.38c2.64,1.57,6.09,3.63,8.88,5.26-3.33.48-6.3.88-7,.9a3.88,3.88,0,0,0-2.67,6.65c2,1.94,4.13,4.09,6,6-7.38-1-18.18-2.68-28.14-4.27a3.88,3.88,0,0,0-4.27,5.09l2,5.88L167,182.15a3.84,3.84,0,0,0-3.52.78l-10.3,8.74-18.34-8.84a3.89,3.89,0,0,0-2.4-.32c-12.79,2.44-32,6-41.33,7.58,1.3-3.31,3.17-7.74,4.9-11.64A3.88,3.88,0,0,0,92.24,173l-26,1.43Z"
      />
      <path
        className="cls-4"
        d="M182.57,100.21a3.88,3.88,0,0,0-1.23,5.34c.12.2,12.34,20,10.09,37.68a3.87,3.87,0,0,0,3.35,4.33,4.19,4.19,0,0,0,.5,0,3.87,3.87,0,0,0,3.83-3.38c2.6-20.38-10.64-41.86-11.2-42.76A3.87,3.87,0,0,0,182.57,100.21Z"
      />
      <circle className="cls-5" cx="150" cy="150" r="135" />
    </Svg>
  );
};

export default Icon;
