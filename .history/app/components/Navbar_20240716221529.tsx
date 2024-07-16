import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  const pathname = usePathname() || "/";

  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-900 shadow-lg">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  {/* Your logo or site title can go here */}
                  <span className="font-bold text-xl">Weather App</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <NavLink href="/" currentPath={pathname}>
                      HOME
                    </NavLink>
                    <NavLink href="/projects" currentPath={pathname}>
                      PROJECTS
                    </NavLink>
                    <NavLink href="/ui-showcase" currentPath={pathname}>
                      UI DESIGN PORTFOLIO
                    </NavLink>
                    <NavLink href="/contact" currentPath={pathname}>
                      CONTACT ME
                    </NavLink>
                  </div>
                </div>
                <ThemeButton />
                <div className="-mr-2 flex items-center sm:hidden">
                  <ThemeButton />
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
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink href="/" currentPath={pathname}>
                HOME
              </NavLink>
              <NavLink href="/projects" currentPath={pathname}>
                PROJECTS
              </NavLink>
              <NavLink href="/ui-showcase" currentPath={pathname}>
                UI DESIGN PORTFOLIO
              </NavLink>
              <NavLink href="/contact" currentPath={pathname}>
                CONTACT ME
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

// NavLink component to handle active state
function NavLink({ href, currentPath, children }) {
  const isActive = href === currentPath;

  return (
    <Link href={href} passHref>
      <a
        className={`${
          isActive
            ? "bg-blue-100 border-blue-500 text-blue-500 border-l-4"
            : "border-transparent text-gray-500 hover:bg-gray-100 hover:border-gray-300 hover:text-blue-500"
        } block px-3 py-2 rounded-md text-base font-medium dark:hover:bg-gray-700`}
      >
        {children}
      </a>
    </Link>
  );
}
