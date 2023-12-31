"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  let pathname = usePathname() || "/";
  return (
   
    < as = "nav">
 {({open})=>(
     <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-2xl font-medium">
                  Yingxin <span className="text-blue-400">Zhang</span>
                </h1>
              </Link>
            </div>

            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
              <Link
                href="/"
                prefetch
                className={`${
                  pathname === "/"
                    ? "border-blue-400 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                }`}
              >
                HOME
              </Link>
              <Link
                href="/guestFeedback"
                prefetch
                className={`${
                  pathname === "/guestFeedback"
                    ? "border-blue-400 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                }`}
              >
                Feedback
              </Link>
              <Link
                href="/projects"
                prefetch
                className={`${
                  pathname === "/projects"
                    ? "border-blue-400 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                }`}
              >
                Projects
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:ring-teal-500 dark:hover:bg-gray-800">
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </Disclosure.Button>
          </div>
        </div>
      </div>
  </>
  )}
  </>
}
