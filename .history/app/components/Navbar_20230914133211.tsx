"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  let pathname = usePathname() || "/";
  return (
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
<Disclosure .Button></Disclosure>
        </div>
      </div>
    </div>
  );
}
