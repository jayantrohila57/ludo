import React from "react";

const Ludo = () => {
  return (
    <div className="md:h-screen flex flex-col md:flex-row sm:flex-col">
      <div className="flex-1 bg-neutral-950"></div>
      <div className="md:w-[100vh] mx-auto sm:w-[100vw] w-[100vw] md:h-screen sm:h-[100vw] h-[100vw]  bg-neutral-950 ">
        <main className="h-full w-full">
          <div className="h-full w-full gap-0.5 grid grid-cols-5 grid-rows-5">
            {/* 1 */}
            <div
              id="block-one"
              className=" col-span-2 row-span-2 h-full w-full"
            >
              <div className="grid grid-cols-4 grid-rows-4 h-full gap-0.5 w-full ">
                <div className="h-full w-full col-span-2 rounded-lg  row-span-2 bg-yellow-500 flex justify-center items-center">
                  <div className="rounded-lg h-[60%] w-[60%] bg-neutral-200 border-2 border-neutral-900"></div>
                </div>
                <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-yellow-500 flex justify-center items-center">
                  <div className="rounded-lg h-[60%] w-[60%] bg-neutral-200 border-2 border-neutral-900"></div>
                </div>
                <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-yellow-500 flex justify-center items-center">
                  <div className="rounded-lg h-[60%] w-[60%] bg-neutral-200 border-2 border-neutral-900"></div>
                </div>
                <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-yellow-500 flex justify-center items-center">
                  <div className="rounded-lg h-[60%] w-[60%] bg-neutral-200 border-2 border-neutral-900"></div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div id="block-two" className="col-span-1 row-span-2 h-full w-full">
              <div className="grid  grid-cols-1 grid-rows-2 h-full gap-0.5 w-full">
                <div className="h-full w-full col-span-1 row-span-1   ">
                  <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-0.5  ">
                    <div className="col-span-1 row-span-1 h-full w-full bg-orange-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-200 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 rotate-90"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.47 2.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H9a5.25 5.25 0 100 10.5h3a.75.75 0 010 1.5H9a6.75 6.75 0 010-13.5h10.19l-4.72-4.72a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-orange-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-500 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-yellow-500 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-200 rounded-lg"></div>
                  </div>
                </div>
                <div className="h-full w-full col-span-1 row-span-1 ">
                  <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-0.5 ">
                    <div className="col-span-1 row-span-1 h-full w-full bg-orange-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-200 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 rotate-90"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-orange-200 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 rotate-180"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-orange-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-200 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 rotate-45"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div
              id="block-one"
              className=" col-span-2 row-span-2 h-full w-full"
            >
              <div className="grid grid-cols-4 grid-rows-4 h-full gap-0.5 w-full ">
                <div className="h-full w-full col-span-2 rounded-lg  row-span-2 bg-green-500 flex justify-center items-center">
                  <div className="rounded-lg h-[60%] w-[60%] bg-neutral-200 border-2 border-neutral-900"></div>
                </div>
                <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-green-500 flex justify-center items-center">
                  <div className="rounded-lg h-[60%] w-[60%] bg-neutral-200 border-2 border-neutral-900"></div>
                </div>
                <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-green-500 flex justify-center items-center">
                  <div className="rounded-lg h-[60%] w-[60%] bg-neutral-200 border-2 border-neutral-900"></div>
                </div>
                <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-green-500 flex justify-center items-center">
                  <div className="rounded-lg h-[60%] w-[60%] bg-neutral-200 border-2 border-neutral-900"></div>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div id="block-two" className="col-span-2 row-span-1 h-full w-full">
              <div className="grid    grid-cols-2 grid-rows-1 h-full gap-0.5 w-full">
                <div className="h-full w-full col-span-1 row-span-1    ">
                  <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-0.5  ">
                    <div className="col-span-1 row-span-1 h-full w-full bg-orange-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-yellow-500 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-orange-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-orange-200 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 "
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.47 2.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H9a5.25 5.25 0 100 10.5h3a.75.75 0 010 1.5H9a6.75 6.75 0 010-13.5h10.19l-4.72-4.72a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-yellow-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-yellow-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-500 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="h-full w-full col-span-1 row-span-1  ">
                  <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-0.5 ">
                    <div className="col-span-1 row-span-1 h-full w-full bg-orange-200 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-orange-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-orange-200 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 -rotate-45"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-yellow-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-yellow-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-yellow-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-200 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 rotate-90"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* 5 */}
            <div
              id="block-five"
              className=" col-span-1 row-span-1 h-full w-full"
            >
              <div className="h-full w-full">
                <div className="grid grid-cols-3 p-0.5 bg-neutral-200 rounded-lg grid-rows-3 h-full  w-full gap-0.5  ">
                  <div className="col-span-1 row-span-1 h-full w-full bg-neutral-200 rounded-lg flex justify-center items-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-10 h-10 -rotate-45"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="col-span-1 row-span-1 border-2 border-black flex justify-center items-center h-full w-full bg-green-500 rounded-full">
                    <svg viewBox="0 0 24 24" className="w-10 h-10 rotate-90">
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-neutral-200 rounded-lg flex justify-center items-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-10 h-10 rotate-45"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="col-span-1 row-span-1 border-2 border-black flex justify-center items-center h-full w-full bg-yellow-500 rounded-full">
                    <svg viewBox="0 0 24 24" className="w-10 h-10 ">
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-neutral-200  flex justify-center items-center rounded-lg">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="col-span-1 row-span-1 border-2 border-black flex justify-center items-center h-full w-full bg-red-500 rounded-full">
                    <svg viewBox="0 0 24 24" className="w-10 h-10 rotate-180">
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-neutral-200 rounded-lg flex justify-center items-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-10 h-10 rotate-45"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="col-span-1 row-span-1 border-2 border-black flex justify-center items-center h-full w-full bg-blue-500 rounded-full">
                    <svg viewBox="0 0 24 24" className="w-10 h-10 -rotate-90">
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-neutral-200 rounded-lg flex justify-center items-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-10 h-10 -rotate-45"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* 6 */}
            <div id="block-two" className="col-span-2 row-span-1 h-full w-full">
              <div className="grid    grid-cols-2 grid-rows-1 h-full gap-0.5 w-full">
                <div className="h-full w-full col-span-1 row-span-1   ">
                  <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-0.5  ">
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-200 rounded-lg flex justify-center items-center">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 -rotate-90"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                 
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-200 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 rotate-[135deg]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-200 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 rotate-180"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="h-full w-full col-span-1 row-span-1  ">
                  <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-0.5 ">
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-500 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-green-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-200 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 -rotate-180"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.47 2.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H9a5.25 5.25 0 100 10.5h3a.75.75 0 010 1.5H9a6.75 6.75 0 010-13.5h10.19l-4.72-4.72a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-500 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* 7 */}
            <div
              id="block-one"
              className="  col-span-2 row-span-2 h-full w-full"
            >
              <div className="grid grid-cols-4 grid-rows-4 h-full gap-0.5 w-full ">
                <div className="h-full w-full col-span-2 rounded-lg  row-span-2 bg-blue-500 flex justify-center items-center">
                  <div className="rounded-lg h-[60%] w-[60%] bg-neutral-200 border-2 border-neutral-900"></div>
                </div>
                <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-blue-500 flex justify-center items-center">
                  <div className="rounded-lg h-[60%] w-[60%] bg-neutral-200 border-2 border-neutral-900"></div>
                </div>
                <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-blue-500 flex justify-center items-center">
                  <div className="rounded-lg h-[60%] w-[60%] bg-neutral-200 border-2 border-neutral-900"></div>
                </div>
                <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-blue-500 flex justify-center items-center">
                  <div className="rounded-lg h-[60%] w-[60%] bg-neutral-200 border-2 border-neutral-900"></div>
                </div>
              </div>
            </div>
            {/* 8 */}
            <div id="block-two" className="col-span-1 row-span-2 h-full w-full">
              <div className="grid    grid-cols-1 grid-rows-2 h-full gap-0.5 w-full">
                <div className="h-full w-full col-span-1 row-span-1   ">
                  <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-0.5  ">
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-200 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 -rotate-[135deg]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-200 rounded-lg flex justify-center items-center">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10  "
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                   
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-200 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 -rotate-90"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-200 rounded-lg"></div>
                  </div>
                </div>
                <div className="h-full w-full col-span-1 row-span-1  ">
                  <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-0.5 ">
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-500 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-500 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-500 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-200 rounded-lg"></div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-blue-200 rounded-lg flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 -rotate-90"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.47 2.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H9a5.25 5.25 0 100 10.5h3a.75.75 0 010 1.5H9a6.75 6.75 0 010-13.5h10.19l-4.72-4.72a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="col-span-1 row-span-1 h-full w-full bg-red-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* 9 */}
            <div
              id="block-one"
              className=" col-span-2 row-span-2 h-full w-full"
            >
              <div className="grid grid-cols-4 grid-rows-4 h-full gap-0.5 w-full ">
                <div className="h-full w-full col-span-2 rounded-lg  row-span-2 bg-red-500 flex justify-center items-center">
                  <div className="rounded-lg h-[60%] w-[60%] bg-neutral-200 border-2 border-neutral-900"></div>
                </div>
                <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-red-500 flex justify-center items-center">
                  <div className="rounded-lg h-[60%] w-[60%] bg-neutral-200 border-2 border-neutral-900"></div>
                </div>
                <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-red-500 flex justify-center items-center">
                  <div className="rounded-lg h-[60%] w-[60%] bg-neutral-200 border-2 border-neutral-900"></div>
                </div>
                <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-red-500 flex justify-center items-center">
                  <div className="rounded-lg h-[60%] w-[60%] bg-neutral-200 border-2 border-neutral-900"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="flex-1 bg-neutral-950"></div>
    </div>
  );
};

export default Ludo;
