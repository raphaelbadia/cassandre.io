import { FC } from "react";
import Image from "next/image";

const Welcome: FC = ({ children }) => {
  return (
    <div className="container px-4 mx-auto">
      <div className="max-w-2xl mx-auto">
        <h2 className="mb-6 text-3xl font-bold font-heading text-gray-900">
          Welcome to the artist&rsquo;s workshop
        </h2>
        <p className="mb-6 text-lg text-gray-900 font-semibold">
          A series of only 300 hand drawn painting of the artist Cassandre, one
          of the most famous designer of the art deco era. Not generated, not
          algorithm, no thousands of NFT - only hard, human work from the begin
          to the end of the process.
        </p>
        <div className="relative h-112 mb-10 lg:-mx-20 xl:-mx-40  border-8 md:border-12 lg:border-16 border-black">
          <Image
            className="w-full h-full object-cover"
            src="/images/dubonnet-triptych.jpeg"
            alt=""
            layout="responsive"
            width="1175"
            height="493"
          />
          <span
            className="
                  hidden
                  lg:inline
                  absolute
                  bottom-0
                  right-0
                  pl-10
                  pr-4
                  py-2
                  text-gray-500
                  bg-yellow-50
                  clip-path-left-small
                "
          >
            Famous triptych for a apéritif brand
          </span>
        </div>
        <p className="mb-6 text-lg text-gray-900 font-semibold">
          Each artwork is unique and has been drawn by Cassandre himself,
          digitalized and restored by his grandson.
        </p>
        <p className="text-lg text-gray-900 font-semibold">
          The paintings are stored as ERC-721 tokens on the Ethereum blockchain
          and hosted on IPFS.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
