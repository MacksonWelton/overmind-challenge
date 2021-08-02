import React from "react";
import Lottie from "react-lottie";

import animationData from "../../assets/dark-mode.json";

const ButtonDarkMode = ({active}) => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRation: "xMidYMid slice",
    },
  };

  return <Lottie speed={active ? 10 : -10} options={defaultOptions} height={40}
  width={100}/>;
};

export default ButtonDarkMode;
