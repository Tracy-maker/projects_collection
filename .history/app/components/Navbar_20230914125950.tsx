"use client";

import Link from "next/link";

export default function Navbar() {
    let pathname = usePathname() || '/'
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

        </div>
      </div>
    </div>
  );
}
