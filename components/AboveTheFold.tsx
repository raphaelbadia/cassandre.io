import { FC } from "react";
import Image from "next/image";

const AboveTheFold: FC = ({ children }) => {
  return (
    <>
      <div className="relative pt-12 pb-32 md:pb-32 bg-gray-800 bg-gray-900">
        <div
          className="
              absolute
              top-0
              bottom-0
              -left-1/4
              -right-1/4
              flex
              items-center
              justify-center
            "
        ></div>
        <div className="relative container px-4 mx-auto text-center">
          <div className="relative max-w-4xl mx-auto mt-20">
            <div className="relative z-10 mb-20">
              <span
                className="
                    text-lg text-white
                    font-semibold
                    tracking-widest
                    uppercase
                  "
              >
                300 UNIQUE posters FROM THE LEGENDARY ART DECO DESIGNER
              </span>
              <h2
                className="
                    mt-8
                    mb-8
                    text-white text-4xl
                    lg:text-6xl
                    font-bold
                    uppercase
                  "
              >
                The cassandre legacy
              </h2>
              <a
                className="
                    inline-block
                    w-full
                    md:w-auto
                    mb-2
                    md:mb-0
                    py-5
                    px-8
                    mr-6
                    text-sm
                    font-bold
                    uppercase
                    hover:bg-yellow-400
                    transition
                    duration-200
                    bg-yellow-600
                  "
                href="#"
              >
                Waiting list
              </a>
              <a
                className="
                    inline-block
                    w-full
                    md:w-auto
                    py-5
                    px-8
                    text-sm text-white
                    font-bold
                    uppercase
                    border border-white
                    hover:border-gray-50
                    transition
                    duration-200
                  "
                href="#"
              >
                LEARN MORE
              </a>
            </div>
            <a
              className="
                  relative
                  z-10
                  flex
                  justify-center
                  items-center
                  text-center text-white
                  hover:text-blue-100
                "
              href="#"
            >
              <span>Watch</span>
              <span className="px-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.2769 16.6154L12.1231 22.4615C11.9015 22.72 11.5138 22.7569 11.2554 22.5354C11.0523 22.3692 10.9846 22.0923 11.0769 21.8462V10.1538C10.9538 9.83385 11.1138 9.48308 11.4338 9.36C11.68 9.26769 11.9569 9.33539 12.1231 9.53846L22.2769 15.3846C22.6154 15.5385 22.7631 15.9446 22.6092 16.2831C22.5415 16.4308 22.4246 16.5477 22.2769 16.6154ZM32 16C32 24.8369 24.8369 32 16 32C7.16308 32 0 24.8369 0 16C0 7.16308 7.16308 0 16 0C24.8369 0 32 7.16308 32 16ZM29.5385 16C29.5385 8.52308 23.4769 2.46154 16 2.46154C8.52308 2.46154 2.46154 8.52308 2.46154 16C2.46154 23.4769 8.52308 29.5385 16 29.5385C23.4769 29.5385 29.5385 23.4769 29.5385 16Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span>the video</span>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          className="clip-path-both opacity-5"
          src="/images/masonry.png"
          layout="fill"
          alt=""
          objectFit="cover"
          objectPosition="0% 0%"
        />
      </div>
    </>
  );
};

export default AboveTheFold;
