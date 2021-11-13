import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

type SectionProps = {
  className?: string;
  dark?: boolean;
} & HTMLAttributes<HTMLElement>;

const Section: FC<SectionProps> = ({ children, className, ...rest }) => {
  return (
    <section className={clsx("relative overflow-hidden", className)} {...rest}>
      {children}
    </section>
  );
};

export default Section;
