import { FC } from "react";
import Image from "next/image";

const NavigationDrawerItem: FC = ({ children }) => {
  return (
    <li className="mb-1">
      <a
        className="
                block
                pl-16
                py-5
                font-semibold
                text-gray-800
                hover:bg-gray-100
                rounded
              "
        href="#"
      >
        {children}
      </a>
    </li>
  );
};

export default NavigationDrawerItem;
