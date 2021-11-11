import clsx from "clsx";
import { FC } from "react";

type LegendProps = {};

const Legend: FC<LegendProps> = ({ children }) => {
  return (
    <div className="order-1 bg-yellow-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
      {/* <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipstggfgum</h3> */}
      <p className="text-gray-900 font-semibold text-opacity-100">{children}</p>
    </div>
  );
};

export default Legend;
