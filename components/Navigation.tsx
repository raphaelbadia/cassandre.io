import { FC, useState } from "react";
import Image from "next/image";
import IconBurger from "./svg/IconBurger";
import clsx from "clsx";
import NavigationDrawerItem from "./NavigationDrawerItem";

const Navigation: FC = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleToggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  const handleBackdropClick = () => setDrawerOpen(false);

  return (
    <>
      <nav className="relative z-10 py-8 px-4 xl:px-10">
        <div className="flex justify-between items-center">
          <a className="text-xl text-white font-semibold" href="#">
            <Image
              src="/images/cassandre-logo.png"
              alt="Name of the artist, written with his typo &ldquo;Le Bifur&rdquo;"
              width="200"
              height="27"
            />
          </a>
          {/* BURGER ICON FOR MOBILE */}
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center p-3 rounded"
              onClick={handleToggleDrawer}
            >
              <IconBurger />
            </button>
          </div>

          {/* MENU DESKTOP */}
          <ul
            className="
                hidden
                absolute
                top-1/2
                left-1/2
                transform
                -translate-y-1/2 -translate-x-1/2
                lg:flex lg:w-auto lg:space-x-10
              "
          >
            <li>
              <a
                className="text-white font-semibold hover:text-gray-50"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white font-semibold hover:text-gray-50"
                href="#"
              >
                The story
              </a>
            </li>
            <li>
              <a
                className="text-white font-semibold hover:text-gray-50"
                href="#"
              >
                NFTs
              </a>
            </li>
            <li>
              <a
                className="text-white font-semibold hover:text-gray-50"
                href="#"
              >
                Roadmap
              </a>
            </li>
          </ul>

          {/* LOGIN REGISTER DESKTOP */}
          <div className="hidden lg:block">
            <a
              className="
                  inline-block
                  px-8
                  text-white
                  hover:text-gray-50
                  font-semibold
                "
              href="#"
            >
              Sign in
            </a>
            <a
              className="
                  inline-block
                  py-3
                  px-8
                  text-sm text-white
                  hover:text-gray-50
                  uppercase
                  font-semibold
                  border-2 border-white
                "
              href="#"
            >
              Sign up
            </a>
          </div>
        </div>
      </nav>

      <div
        className={clsx(
          !isDrawerOpen && "hidden",
          "navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50"
        )}
      >
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-90"
          onClick={handleBackdropClick}
        ></div>
        <nav
          className="
        relative
        flex flex-col
        py-8
        w-full
        h-full
        bg-white
        border-r
        overflow-y-auto
      "
        >
          <div className="flex items-center mb-16">
            <a
              className="
            ml-auto
            mr-auto
            text-xl text-gray-800
            font-semibold
            leading-none
            pl-4
            pr-4
          "
              href="#"
            >
              <Image
                src="/images/cassandre-logo-official.jpg"
                alt="Cassandre's official logo"
                width="1552"
                height="232"
              />
            </a>
          </div>
          <div>
            <ul>
              <NavigationDrawerItem>Home</NavigationDrawerItem>
              <NavigationDrawerItem>The story</NavigationDrawerItem>
              <NavigationDrawerItem>NFTs</NavigationDrawerItem>
              <NavigationDrawerItem>Roadmap</NavigationDrawerItem>
            </ul>
          </div>
          <div className="mt-auto px-10">
            <div className="pt-6">
              <a
                className="
              block
              mb-2
              py-4
              text-center text-gray-800
              font-semibold
            "
                href="#"
              >
                Sign in
              </a>
              <a
                className="
              block
              py-4
              text-center text-gray-800
              leading-normal
              uppercase
              border-2 border-gray-800
              hover:bg-gray-50
              font-semibold
            "
                href="#"
              >
                Sign Up
              </a>
            </div>
            <p className="mt-6 mb-4 text-sm text-center text-gray-400">
              <span>
                © 2021 All rights reserved by The Cassandre Foundation
              </span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
