import React from "react";

export const LinkIcon = ({extraStyles}) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-6 h-6 ${extraStyles}`}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M9.75 23q-1.275 0-2.262-.763T6.15 20.276Q6 19.7 5.525 19.35T4.45 19q-.4 0-.75.163t-.6.462L1.575 18.35q.525-.65 1.288-1T4.45 17q1.275 0 2.275.75t1.35 1.975q.15.575.625.925t1.05.35q.475 0 .85-.25t.65-.625l.025-.05l-7.9-10.925L12.5.2l9.125 8.95L12.5 21.8q-.45.625-1.2.913T9.75 23"
        ></path>
      </svg>
    </div>
  );
};
