import React from "react";

const Ludo = () => {
  return (
    <section className="h-screen w-screen bg-gray-900 text-slate-200 grid grid-cols-12">
      <div className="col-span-2 p-0.5">
      </div>
      <main className="col-span-6 p-0.5">
        <div className="h-full w-full grid grid-cols-5 grid-rows-5">
          {/* 1 */}
          <div
            id="block-one"
            className=" col-span-2 row-span-2 h-full w-full"
          >
            <div className="grid grid-cols-4 grid-rows-4 h-full gap-0.5 w-full p-0.5">
              <div className="h-full w-full col-span-2 rounded-lg  row-span-2 bg-yellow-500 flex justify-center items-center">
                <div className="rounded-lg h-[60%] w-[60%] bg-gray-200 border-2 border-gray-900"></div>
              </div>
              <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-yellow-500 flex justify-center items-center">
                <div className="rounded-lg h-[60%] w-[60%] bg-gray-200 border-2 border-gray-900"></div>
              </div>
              <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-yellow-500 flex justify-center items-center">
                <div className="rounded-lg h-[60%] w-[60%] bg-gray-200 border-2 border-gray-900"></div>
              </div>
              <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-yellow-500 flex justify-center items-center">
                <div className="rounded-lg h-[60%] w-[60%] bg-gray-200 border-2 border-gray-900"></div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div id="block-two" className="col-span-1 row-span-2 h-full w-full">
            <div className="grid py-0.5 grid-cols-1 grid-rows-2 h-full gap-0.5 w-full">
              <div className="h-full w-full col-span-1 row-span-1   ">
                <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-0.5  ">
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-yellow-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-green-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-green-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-green-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                </div>
              </div>
              <div className="h-full w-full col-span-1 row-span-1 ">
                <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-0.5 ">
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-green-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-green-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-green-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div
            id="block-one"
            className=" col-span-2 row-span-2 h-full w-full"
          >
            <div className="grid grid-cols-4 grid-rows-4 h-full gap-0.5 w-full p-0.5">
              <div className="h-full w-full col-span-2 rounded-lg  row-span-2 bg-green-500 flex justify-center items-center">
                <div className="rounded-lg h-[60%] w-[60%] bg-gray-200 border-2 border-gray-900"></div>
              </div>
              <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-green-500 flex justify-center items-center">
                <div className="rounded-lg h-[60%] w-[60%] bg-gray-200 border-2 border-gray-900"></div>
              </div>
              <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-green-500 flex justify-center items-center">
                <div className="rounded-lg h-[60%] w-[60%] bg-gray-200 border-2 border-gray-900"></div>
              </div>
              <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-green-500 flex justify-center items-center">
                <div className="rounded-lg h-[60%] w-[60%] bg-gray-200 border-2 border-gray-900"></div>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div id="block-two" className="col-span-2 row-span-1 h-full w-full">
            <div className="grid   py-0.5 grid-cols-2 grid-rows-1 h-full gap-0.5 w-full">
              <div className="h-full w-full col-span-1 row-span-1    ">
                <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-0.5  ">
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-yellow-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-yellow-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-yellow-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-blue-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                </div>
              </div>
              <div className="h-full w-full col-span-1 row-span-1  ">
                <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-0.5 ">
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-yellow-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-yellow-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-yellow-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div
            id="block-five"
            className=" col-span-1 row-span-1 h-full w-full"
          >
            <div className="h-full w-full px-0.5 ">
              <div className="grid grid-cols-3 bg-gray-200 rounded-lg grid-rows-3 h-full  w-full gap-0.5 p-0.5 ">
                <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                <div className="col-span-1 row-span-1 h-full w-full bg-green-500 rounded-full"></div>
                <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                <div className="col-span-1 row-span-1 h-full w-full bg-yellow-500 rounded-full"></div>
                <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                <div className="col-span-1 row-span-1 h-full w-full bg-red-500 rounded-full"></div>
                <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                <div className="col-span-1 row-span-1 h-full w-full bg-blue-500 rounded-full"></div>
                <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div id="block-two" className="col-span-2 row-span-1 h-full w-full">
            <div className="grid   py-0.5 grid-cols-2 grid-rows-1 h-full gap-0.5 w-full">
              <div className="h-full w-full col-span-1 row-span-1   ">
                <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-0.5  ">
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-red-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-red-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-red-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                </div>
              </div>
              <div className="h-full w-full col-span-1 row-span-1  ">
                <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-0.5 ">
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-green-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-red-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-red-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-red-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
          {/* 7 */}
          <div
            id="block-one"
            className="  col-span-2 row-span-2 h-full w-full"
          >
            <div className="grid grid-cols-4 grid-rows-4 h-full gap-0.5 w-full p-0.5">
              <div className="h-full w-full col-span-2 rounded-lg  row-span-2 bg-blue-500 flex justify-center items-center">
                <div className="rounded-lg h-[60%] w-[60%] bg-gray-200 border-2 border-gray-900"></div>
              </div>
              <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-blue-500 flex justify-center items-center">
                <div className="rounded-lg h-[60%] w-[60%] bg-gray-200 border-2 border-gray-900"></div>
              </div>
              <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-blue-500 flex justify-center items-center">
                <div className="rounded-lg h-[60%] w-[60%] bg-gray-200 border-2 border-gray-900"></div>
              </div>
              <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-blue-500 flex justify-center items-center">
                <div className="rounded-lg h-[60%] w-[60%] bg-gray-200 border-2 border-gray-900"></div>
              </div>
            </div>
          </div>
          {/* 8 */}
          <div id="block-two" className="col-span-1 row-span-2 h-full w-full">
            <div className="grid   py-0.5 grid-cols-1 grid-rows-2 h-full gap-0.5 w-full">
              <div className="h-full w-full col-span-1 row-span-1   ">
                <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-0.5  ">
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-blue-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-blue-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-blue-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                </div>
              </div>
              <div className="h-full w-full col-span-1 row-span-1  ">
                <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-0.5 ">
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-blue-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-blue-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-blue-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-red-500 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                  <div className="col-span-1 row-span-1 h-full w-full bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
          {/* 9 */}
          <div
            id="block-one"
            className=" col-span-2 row-span-2 h-full w-full"
          >
            <div className="grid grid-cols-4 grid-rows-4 h-full gap-0.5 w-full p-0.5">
              <div className="h-full w-full col-span-2 rounded-lg  row-span-2 bg-red-500 flex justify-center items-center">
                <div className="rounded-lg h-[60%] w-[60%] bg-gray-200 border-2 border-gray-900"></div>
              </div>
              <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-red-500 flex justify-center items-center">
                <div className="rounded-lg h-[60%] w-[60%] bg-gray-200 border-2 border-gray-900"></div>
              </div>
              <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-red-500 flex justify-center items-center">
                <div className="rounded-lg h-[60%] w-[60%] bg-gray-200 border-2 border-gray-900"></div>
              </div>
              <div className="h-full w-full col-span-2 rounded-lg row-span-2 bg-red-500 flex justify-center items-center">
                <div className="rounded-lg h-[60%] w-[60%] bg-gray-200 border-2 border-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="col-span-2 p-0.5">
        <div className=""></div>
      </div>
      <div className="col-span-2 bg-gray-900 p-0.5">
        <div className=""></div>
      </div>
    </section>
  );
};

export default Ludo;
