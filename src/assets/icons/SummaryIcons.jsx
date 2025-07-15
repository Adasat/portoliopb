import React from "react";

export const SummaryIcons = ({extraSyles, open, close}) => {
  return (
    <div>
      <svg
        className={extraSyles + open}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
      </svg>

      <svg
        className={extraSyles + close}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 15l-6-6-6 6"
        />
      </svg>
    </div>
  );
};
