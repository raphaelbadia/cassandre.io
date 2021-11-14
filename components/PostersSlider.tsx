import useBreakpoint from "use-breakpoint";
import { FC } from "react";
import SlickSlider from "react-slick";
import Image from "next/image";
import aubucheron from "../public/images/posters/aubucheron.webp";
import casquette from "../public/images/posters/casquette.webp";
import chemindefer from "../public/images/posters/chemindefer.webp";
import cyclebrillant from "../public/images/posters/cyclebrillant.webp";
import etoiledunord from "../public/images/posters/etoiledunord.webp";
import goldenclub from "../public/images/posters/goldenclub.webp";
import newyork from "../public/images/posters/newyork.webp";
import nordexpressvertical from "../public/images/posters/nordexpressvertical.webp";
import pathe from "../public/images/posters/pathe.webp";
import sensation from "../public/images/posters/sensation.webp";
import triplex from "../public/images/posters/triplex.webp";

const PostersSlider: FC = ({ children }) => {
  const config = {
    dots: false,
    variableWidth: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3000,
    swipeToSlide: false,
    touchMove: false,
  };

  const { breakpoint } = useBreakpoint(BREAKPOINTS, "mobile");
  const isMobile = breakpoint === "mobile";

  return (
    <div className="container px-4 mx-auto">
      <div className="max-w-2xl mx-auto flex items-center mb-12 pb-6 border-b-3 border-gray-700">
        <h2 className="text-4xl md:text-5xl font-bifur font-heading text-gray-900">
          The Assets
        </h2>
      </div>
      <SlickSlider
        {...config}
        className="-mx-4 md:mx-0 border-l-12 border-r-12 border-black bg-black force-400"
      >
        {!isMobile && <SliderImage alt="Au Bûcheron" src={aubucheron} />}
        <SliderImage alt="TBD" src={casquette} />
        <SliderImage alt="TBD" src={chemindefer} />
        <SliderImage alt="TBD" src={cyclebrillant} />
        <SliderImage alt="TBD" src={etoiledunord} />
        <SliderImage alt="TBD" src={goldenclub} />
        <SliderImage alt="TBD" src={newyork} />
        <SliderImage alt="TBD" src={nordexpressvertical} />
        <SliderImage alt="TBD" src={pathe} />
        <SliderImage alt="TBD" src={sensation} />
        <SliderImage alt="TBD" src={triplex} />
      </SlickSlider>
    </div>
  );
};

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

const SliderImage: FC<{
  src: StaticImageData;
  hideMobile?: boolean;
  alt: string;
  style?: any;
}> = ({ src, hideMobile, alt, style, ...rest }) => {
  const { height, width } = src;
  const computedWidth = (width * 400) / height;
  return (
    <div style={style}>
      <Image
        src={src}
        height={400}
        alt={alt}
        placeholder="blur"
        lazyBoundary="0px"
        width={computedWidth}
        {...rest}
      />
    </div>
  );
};

export default PostersSlider;
