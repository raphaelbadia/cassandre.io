import { FC } from "react";
import Image from "next/image";
import FaqItem from "./FaqItem";

const Faq: FC = ({ children }) => {
  return (
    <>
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="mt-4 mb-6 text-4xl font-bold font-heading font-bifur text-gray-100">
            Lorem ipsum dolor
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <ul>
            <FaqItem title="Fusce eget nunc et libero accumsan rutrum quis nec lectus?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod orci sed tristique placerat. Fusce in ligula urna. Fusce
              eget nunc et libero accumsan rutrum quis nec lectus. Quisque
              luctus sem nibh, quis ornare neque consectetur varius. Maecenas
              rhoncus consectetur rutrum.
            </FaqItem>
            <FaqItem title="Donec sed leo sit amet ante ornare laoreet in quis est?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod orci sed tristique placerat. Fusce in ligula urna. Fusce
              eget nunc et libero accumsan rutrum quis nec lectus. Quisque
              luctus sem nibh, quis ornare neque consectetur varius. Maecenas
              rhoncus consectetur rutrum.
            </FaqItem>
            <FaqItem title="Fusce eget nunc et libero accumsan rutrum quis nec lectus?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod orci sed tristique placerat. Fusce in ligula urna. Fusce
              eget nunc et libero accumsan rutrum quis nec lectus. Quisque
              luctus sem nibh, quis ornare neque consectetur varius. Maecenas
              rhoncus consectetur rutrum.
            </FaqItem>
            <FaqItem title="Fusce eget nunc et libero accumsan rutrum quis nec lectus?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod orci sed tristique placerat. Fusce in ligula urna. Fusce
              eget nunc et libero accumsan rutrum quis nec lectus. Quisque
              luctus sem nibh, quis ornare neque consectetur varius. Maecenas
              rhoncus consectetur rutrum.
            </FaqItem>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Faq;
