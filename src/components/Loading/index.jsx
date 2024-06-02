import React from "react";
import { Audio } from "react-loader-spinner";
function Loading() {
  return (
    <div className="absolute inset-x-1/2 pt-6 z-[-1] min-w-min  max-h-min translate-x-[-50%]">
      <Audio
        height="60"
        width="60"
        radius="9"
        color="bg-gray-100"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}

export default Loading;
