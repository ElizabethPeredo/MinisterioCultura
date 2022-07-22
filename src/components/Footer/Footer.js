import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
      <footer className="p-4 bg-white sm:p-6 dark:bg-principal block">
        <div className="flex flex-col items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="" className="hover:underline">Unidad Ejecutora 008™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <div className="">
              <span className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><FontAwesomeIcon className="" icon={faFacebook} /></span>
            </div>
            <div className="">
              <span className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><FontAwesomeIcon className="" icon={faFacebook} /></span>
            </div>
          </div>
        </div>
      </footer>



  );
}
