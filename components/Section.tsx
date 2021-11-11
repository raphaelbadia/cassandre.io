import { FC } from "react";

const Section: FC = ({ children }) => {
  return (
    <section className="relative overflow-hidden bg-gray-900">{children}</section>
  );
};

export default Section;
