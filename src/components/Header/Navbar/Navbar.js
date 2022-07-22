import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun } from "@fortawesome/free-solid-svg-icons"


export default function Navbar() {
  function openMenu() {
    let menu = document.querySelector("#menu-bars");
    let navbar = document.querySelector(".navbar__items");
    navbar.classList.toggle("hidden");
  }

  function filterSelection() {
    if (typeof window === 'object') {
      let x = document.querySelector("#__next");
      if (x !== null) {
        x.className = "background-body"
      }
    }
  }
  filterSelection()

  function dark() {
    let id = document.querySelector("#__next");
    id.classList.toggle("theme-dark");
  }
  return (
    <header>
      <nav className="z-50bg-white px-2 sm:px-4 py-2.5  dark:bg-principal shadow-xl ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="" className="flex items-center">
            <img src="https://empleoz.com/media/logo/59b2b6325a0c6037f1aa734e.png" className="mr-3 h-6 sm:h-9" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">UE008</span>
          </a>

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-base text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:txt-color1 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <FontAwesomeIcon className="i color1" icon={faBars} id="menu-bars" onClick={openMenu} />
          </button>

          <div className="navbar__items hidden w-full md:block md:w-auto " id="navbar-default">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium list-none	">
              <li>
                <Link href={{ pathname: "/" }}>
                  <a href="#" className="block py-2 pr-4 pl-3 text-txt-color1 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-color2 dark:hover:bg-color1 dark:hover:text-white md:dark:hover:bg-transparent
                  text-base " aria-current="page">Home</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: "/Blog" }}>
                  <a href="#" className="block py-2 pr-4 pl-3 text-txt-color1 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-color2 dark:hover:bg-color1 dark:hover:text-white md:dark:hover:bg-transparent
                  text-base">Blog</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
