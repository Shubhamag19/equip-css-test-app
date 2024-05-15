import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col flex-1 overflow-hidden sticky z-50 top-0 nav-ctr shadow">
        <nav className="bg-white border-gray-200 px-4 sm:px-3 lg:px-4 main-nav">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center h-16">
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                onclick="toggleSidebar();"
                className="inline-flex items-center p-1 pl-0 text-sm text-gray-800 rounded-lg md:hidden mr-1 hover:bg-gray-100 hover:text-black mobile-item mobile-item__hamburger"
                id="mobile-item__hamburger"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="

w-6 h-6 xs:w- xs:h- sm:w- sm:h- md:w- md:h- lg:w- lg:h-

"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  ></path>
                </svg>
              </button>
              <div className="flex items-center justify-start sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex flex-col items-center text-blue-900">
                  <a className="text-lg md:text-2xl logo-text" href="/">
                    <img
                      className="h-5 lg:h-7 w-auto"
                      src="https://cdn-media-assets.socratease.co/equip/product/img/equip-logo.png"
                      alt="Equip logo"
                    />
                  </a>
                </div>
              </div>

              <div
                className="flex items-center text-xs lg:text-base h-full text-blue-900 ml-2 sm:ml-4 lg:ml-10"
                id="nav-account-btn"
              >
                <div className="md:mr-1 h-full uppercase">
                  <div className="flex items-center gap-4 md:gap-5 h-full">
                    <a
                      href="/demo/test-types/"
                      className="hidden lg:inline-block"
                    >
                      Test types
                    </a>
                    <a
                      href="/demo/test-types/"
                      className="inline-block lg:hidden"
                    >
                      Tests
                    </a>
                    <div
                      id="eqp-skills-btn"
                      className="hidden md:flex flex-row items-center cursor-pointer h-full"
                    >
                      <span>Skills</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 sm:h-4 sm:w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                    <a href="/pricing/">Pricing</a>
                    <div
                      id="eqp-usecases-btn"
                      className="hidden lg:flex flex-row items-center cursor-pointer h-full"
                    >
                      <span>Use Cases</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 sm:h-4 sm:w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                    <div
                      id="eqp-resources-btn"
                      className="hidden md:flex flex-row items-center cursor-pointer h-full"
                    >
                      <span>Resources</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 sm:h-4 sm:w-4 ml-1 rotate-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center ml-auto">
                <a
                  className="ml-2 xs:ml-4 px-2 py-1 md:px-4 md:py-3 lg:px-6 bg-blue-900 rounded-full uppercase text-xs lg:text-sm text-white tracking-widest hidden md:inline-block"
                  href="/account/recruiter-onboarding/"
                >
                  Recruiter<span className="ml-1 hidden xs:inline">Signup</span>
                </a>
                <a
                  className="ml-2 xs:ml-4 px-3 py-2 md:px-4 md:py-3 lg:px-6 bg-blue-900 rounded-full uppercase text-xs lg:text-sm text-white tracking-widest inline-block md:hidden"
                  href="/account/recruiter-onboarding/"
                >
                  Login
                </a>
              </div>

              <div
                className="lg:hidden fixed justify-between items-center w-full xs:w-52 sm:w-96 bg-white border-r mobile-item left-0 top-0 h-full z-50 -translate-x-full transition-all duration-300 ease-in-out"
                id="mobile-menu-2"
              >
                <div className="flex items-center justify-between h-16 px-4">
                  <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex flex-col items-center pri-text-clr">
                      <a
                        className="text-lg md:text-2xl logo-text text-black"
                        href="/"
                      >
                        E Q U I P
                      </a>
                    </div>
                  </div>

                  <button
                    data-collapse-toggle="mobile-menu-2"
                    type="button"
                    id="mobile-item__close"
                    onclick="toggleSidebar()"
                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mobile-item mobile-item__hamburger "
                    aria-controls="mobile-menu-2"
                    aria-expanded="false"
                    aria-label="Side Nav Menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="

w-6 h-6 xs:w- xs:h- sm:w- sm:h- md:w- md:h- lg:w- lg:h-

"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-6 px-4 h-5/6 overflow-auto">
                  <div className="mb-8">
                    <h3 className="text-sm font-medium leading-6 text-gray-500">
                      USE CASES
                    </h3>
                    <div className="mt-2 flow-root">
                      <div className="-my-2">
                        <a
                          href="/resources/technical-recruitment/"
                          className="block py-1 text-sm font-semibold leading-6 text-gray-900"
                        >
                          Tech Hiring
                        </a>
                        <a
                          href="/resources/non-technical-recruitment/"
                          className="block py-1 text-sm font-semibold leading-6 text-gray-900"
                        >
                          Non-Tech Hiring
                        </a>
                        <a
                          href="/resources/campus-hiring/"
                          className="block py-1 text-sm font-semibold leading-6 text-gray-900"
                        >
                          Campus Hiring
                        </a>
                        <a
                          href="/resources/online-tests-for-institutes/"
                          className="block py-1 text-sm font-semibold leading-6 text-gray-900"
                        >
                          Assessing Students Online
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-sm font-medium leading-6 text-gray-500">
                      SAMPLE DASHBOARDS
                    </h3>
                    <div className="mt-2 flow-root">
                      <div className="-my-2">
                        <a
                          href="/demo/recruiter/home/"
                          className="block py-1 text-sm font-semibold leading-6 text-gray-900"
                        >
                          Recruiter Dashboard
                        </a>
                        <a
                          href="/demo/recruiter/assessments/pyt-demo/results"
                          className="block py-1 text-sm font-semibold leading-6 text-gray-900"
                        >
                          Engineering Role
                        </a>
                        <a
                          href="/demo/recruiter/assessments/bde-demo/results"
                          className="block py-1 text-sm font-semibold leading-6 text-gray-900"
                        >
                          Business Development Role
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-sm font-medium leading-6 text-gray-500">
                      MAIN FEATURES
                    </h3>
                    <div className="mt-2 flow-root">
                      <div className="-my-2">
                        <a
                          href="/assessment-features"
                          className="block py-1 text-sm font-semibold leading-6 text-gray-900"
                        >
                          Cool Features
                        </a>
                        <a
                          href="/useful-features"
                          className="block py-1 text-sm font-semibold leading-6 text-gray-900"
                        >
                          Useful Features
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-sm font-medium leading-6 text-gray-500">
                      OTHERS
                    </h3>
                    <div className="mt-2 flow-root">
                      <div className="-my-2">
                        <a
                          href="/resources/"
                          className="block py-1 text-sm font-semibold leading-6 text-gray-900"
                        >
                          Resource center
                        </a>
                        <a
                          href="/skills"
                          className="block py-1 text-sm font-semibold leading-6 text-gray-900"
                        >
                          Skills
                        </a>
                        <a
                          href="/faqs/"
                          className="block py-1 text-sm font-semibold leading-6 text-gray-900"
                        >
                          FAQs
                        </a>
                        <a
                          href="https://equip.co/blog"
                          className="block py-1 text-sm font-semibold leading-6 text-gray-900"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2">
                    <a
                      className="px-4 py-2 md:px-4 md:py-3 lg:px-6 sec-btn rounded-full uppercase text-sm tracking-widest inline-block w-fit"
                      href="/account/recruiter-onboarding/"
                    >
                      Recruiter Signup
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
