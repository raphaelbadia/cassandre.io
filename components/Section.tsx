import clsx from "clsx";
import { FC } from "react";

type SectionProps = {
  className?: string;
  dark?: boolean;
};

const Section: FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={clsx("relative overflow-hidden", className)}>
      {children}
    </section>
  );
};

export default Section;
