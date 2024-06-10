import React, { useEffect, useState } from "react";
function MessageBox({ msg }) {
  const [animationShow, setAnimationShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimationShow(true);
    }, 1);
  }, []);
  return (
    <div
      className={`${
        msg?.type == "success" ? "bg-green-300" : "bg-red-300"
      } text-white fixed md:left-5 bottom-5 p-6 md:ps-20 md:pe-20 font-manrope rounded text-lg opacity-80`}
    >
      <div
        className={`transition-all ${
          animationShow ? "w-full" : "w-0"
        } h-full absolute left-0 top-0 rounded duration-2000 ease-linear
             ${msg?.type == "success" ? "bg-green-600" : "bg-red-600"}`}
      ></div>
      <p className="text-white relative z-10">
        {msg?.text || "mesaj yüklenemedi"}
      </p>
    </div>
  );
}

export default MessageBox;
