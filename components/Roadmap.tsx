import { FC } from "react";
import Dot from "./Timeline/Dot";
import Legend from "./Timeline/Legend";

const Roadmap: FC = ({ children }) => {
  return (
    <>
      <div className="absolute top-0 right-0">
        <svg
          width="798"
          height="798"
          viewBox="0 0 798 798"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1">
            <path
              d="M797.81 796.481L698.701 697.372C729.839 655.792 748.256 604.148 748.256 548.328C748.256 442.384 681.803 351.629 588.58 315.365L797.81 1.51892C798 1.13919 798 0.759458 797.81 0.569593C797.81 0.189864 797.43 0 797.051 0H0.949322C0.569593 0 0.189864 0.189864 0.189864 0.569593C0.189864 0.949322 0 1.13919 0.189864 1.51892L178.852 269.607L0.189864 448.08C0 448.27 0 448.46 0 448.839C0 449.219 0 449.409 0.189864 449.599C0.379729 449.789 0.569593 449.789 0.949322 449.789C1.32905 449.789 1.51892 449.789 1.70878 449.599L179.991 271.316L281.949 424.347C260.874 460.801 248.722 503.141 248.722 548.328C248.722 685.98 360.742 798 498.584 798C579.656 798 651.994 759.078 697.562 698.891L796.291 797.62C796.481 797.81 796.671 797.81 797.051 797.81C797.43 797.81 797.62 797.81 797.81 797.62C798 797.43 798 797.241 798 796.861C798 796.481 798 796.671 797.81 796.481ZM181.32 269.797L250.431 200.687C250.621 200.497 250.621 200.307 250.621 199.927C250.621 199.547 250.621 199.358 250.431 199.168C250.051 198.788 249.482 198.788 249.102 199.168L180.181 268.089L2.6581 1.89864H795.342L586.871 314.605C559.341 304.163 529.722 298.467 498.774 298.467C406.879 298.467 326.567 348.211 283.088 422.258L181.32 269.797ZM585.732 316.314L398.905 596.364L284.037 424.157C326.946 350.3 407.069 300.555 498.394 300.555C529.152 300.365 558.581 306.061 585.732 316.314ZM498.584 796.101C361.882 796.101 250.621 684.841 250.621 548.328C250.621 503.9 262.393 462.13 283.088 425.866L398.146 598.453C398.335 598.642 398.525 598.832 398.905 598.832C399.285 598.832 399.475 598.642 399.665 598.453L587.44 317.074C680.284 352.958 746.357 443.143 746.357 548.518C746.357 603.769 728.13 655.032 697.372 696.233L598.642 597.503C598.263 597.124 597.693 597.124 597.313 597.503C597.123 597.693 597.123 597.883 597.123 598.263C597.123 598.642 597.123 598.832 597.313 599.022L696.233 697.941C651.045 757.369 579.276 796.101 498.584 796.101Z"
              fill="#A0CDFA"
            ></path>
            <path
              d="M175.055 572.251H0.949322C0.379729 572.251 0 572.631 0 573.201V747.306C0 747.876 0.379729 748.255 0.949322 748.255H175.055C175.625 748.255 176.004 747.876 176.004 747.306V573.201C176.004 572.631 175.625 572.251 175.055 572.251ZM174.106 746.357H1.89864V574.15H174.106V746.357Z"
              fill="#A0CDFA"
            ></path>
            <path
              d="M460.612 225.749C460.801 225.939 460.991 225.939 461.181 225.939C461.371 225.939 461.561 225.939 461.751 225.749L573.771 151.132C573.961 150.942 574.15 150.752 574.15 150.373C574.15 149.993 573.961 149.803 573.771 149.613L461.751 74.9964C461.371 74.8065 460.991 74.8065 460.612 74.9964L348.592 149.613C348.402 149.803 348.212 149.993 348.212 150.373C348.212 150.752 348.402 150.942 348.592 151.132L460.612 225.749ZM461.181 76.7052L571.492 150.183L461.181 223.66L350.87 150.183L461.181 76.7052Z"
              fill="#A0CDFA"
            ></path>
          </g>
        </svg>
      </div>
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="mb-6 text-4xl md:text-5xl font-bold font-bifur text-gray-100">
            Sales roadmap
          </h2>
          <p className="mb-6 text-lg text-gray-100 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris
            felis, lacinia in ornare eget, sollicitudin sit amet tellus. Mauris
            nec nulla orci. Maecenas vitae mauris vel justo rhoncus interdum
            ultricies quis nunc. Nunc a luctus diam, non ornare metus. Aenean
            nec consectetur felis. In semper non turpis vitae pharetra. Sed
            volutpat hendrerit est, quis vehicula dui. Donec urna felis,
            vulputate in elit vitae, malesuada fermentum justo.
          </p>
        </div>
        <div className="relative wrap overflow-hidden py-10 md:p-10 h-full max-w-4xl mx-auto">
          <div
            className="border-2-2 absolute border-opacity-100 border-yellow-500 h-full border-3 -mt-10"
            style={{ left: "calc(50% - 2px)" }}
          ></div>
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <Dot>25%</Dot>
            <Legend>Give away for holders</Legend>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <Dot>50%</Dot>
            <Legend>
              Interview with Roland Mouron (Estate and grandson of Cassandre)
            </Legend>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <Dot>75%</Dot>
            <Legend>Free 90cm*60cm poster for holders</Legend>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <Dot>100%</Dot>
            <Legend>
              Creation of the Cassandre Fundation, to organize events gathering
              around the artist and for holders
            </Legend>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
