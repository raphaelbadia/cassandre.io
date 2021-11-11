import { FC } from "react";

const IconBurger: FC = () => {
  return (
    <svg
      className="text-white block h-4 w-4"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <title>Mobile menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
    </svg>
  );
};

export default IconBurger;
