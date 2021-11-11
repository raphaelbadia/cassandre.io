import clsx from "clsx";
import { FC, useState } from "react";
import IconArrowDown from "./svg/IconArrowDown";
import IconArrowUp from "./svg/IconArrowUp";

type FaqItemProps = {
  title: string;
};

const FaqItem: FC<FaqItemProps> = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(!isOpen);
  return (
    <li className="px-10 py-8 bg-yellow-500 border-b-3 border-yellow-900">
      <button
        className="w-full flex justify-between items-center text-left font-medium font-heading text-gray-900 hover:text-yellow-900"
        onClick={handleOpen}
      >
        <span
          className={clsx("font-heading", isOpen ? "text-lg" : "text-base ")}
        >
          {title}
        </span>
        {isOpen ? <IconArrowUp /> : <IconArrowDown />}
      </button>
      <p
        className={clsx(
          "mt-4 pr-8 text-gray-800 leading-loose",
          !isOpen && "hidden"
        )}
      >
        {children}
      </p>
    </li>
  );
};

export default FaqItem;
