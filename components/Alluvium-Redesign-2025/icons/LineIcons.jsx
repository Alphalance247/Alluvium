import React from "react";

const LineIcons = () => {
  return (
    <>
      <svg
        width="48"
        height="49"
        viewBox="0 0 48 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ddii_680_5588)">
          <rect x="4" y="6" width="40" height="40" rx="8" fill="white" />
          <rect
            x="4.5"
            y="6.5"
            width="39"
            height="39"
            rx="7.5"
            stroke="#D9D9D9"
          />
          <path
            d="M24.8337 17.6665V23.5915L26.9237 21.5248L28.0953 22.7098L24.0003 26.7582L19.9053 22.7098L21.077 21.5248L23.167 23.5915V17.6665H24.8337ZM15.667 17.6665H21.5003V19.3332H17.3337V27.6665H30.667V19.3332H26.5003V17.6665H32.3337V34.3332H15.667V17.6665ZM30.667 29.3332H17.3337V32.6665H30.667V29.3332ZM18.9987 30.1648H20.6687V31.8348H18.9987V30.1648ZM21.4987 30.1648H23.1687V31.8348H21.4987V30.1648Z"
            fill="#595959"
          />
        </g>
        <defs>
          <filter
            id="filter0_ddii_680_5588"
            x="0"
            y="0"
            width="48"
            height="49"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_680_5588"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_680_5588"
              result="effect2_dropShadow_680_5588"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_680_5588"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="erode"
              in="SourceAlpha"
              result="effect3_innerShadow_680_5588"
            />
            <feOffset />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect3_innerShadow_680_5588"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="effect3_innerShadow_680_5588"
              result="effect4_innerShadow_680_5588"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default LineIcons;
