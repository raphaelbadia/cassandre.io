import clsx from "clsx";
import { FC } from "react";

type DotProps = {};

const Dot: FC<DotProps> = ({ children }) => {
  return (
    <div className="z-20 flex items-center order-1 bg-yellow-500 shadow-xl w-16 h-16 rounded-full border-6 border-gray-900">
      <h3 className="mx-auto font-bold text-lg text-gray-800">{children}</h3>
    </div>
  );
};

export default Dot;
