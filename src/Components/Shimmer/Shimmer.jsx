import { useEffect, useState } from "react";

export default function Shimmer() {
  return (
    <>
      {/* Carousel */}
      <div className="hidden container my-10 md:flex flex-col gap-10  animate-pulse">
        <div className="relative w-full flex items-center justify-between">
          <div className="font-semibold rounded-lg text-2xl pl-4 p-5 w-[300px] h-[2px] bg-gray-200"></div>
          <div className="flex gap-4">
            <div className="bg-gray-200 w-9 h-9 rounded-full p-1 hover:opacity-70"></div>
            <div className="bg-gray-200 w-9 h-9 rounded-full p-1 hover:opacity-70"></div>
          </div>
        </div>
        {/* cards carousels */}
        <div className="w-full py-10">
          <div className="h-[150px] animate-pulse grid grid-rows-1 md:grid-cols-4  lg:grid-cols-6 justify-center">
            {Array(6)
              .fill("")
              .map((item, index) => (
                <div
                  className="bg-gray-200 w-full h-[150px] md:w-[150px] md:h-full rounded-full"
                  key={index}
                />
              ))}
          </div>
        </div>
        <div className="font-semibold animate-pulse rounded-lg text-2xl pl-4 p-5 w-[600px] h-[2px] bg-gray-200"></div>
      </div>
      <div className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center  my-9 gap-y-16">
        {Array(10)
          .fill("")
          .map((index) => {
            return (
              <div
                className={`w-[238px] h-[262px] animate-pulse flex flex-col rounded-2xl p-2 bg-slate-200 `}
                key={crypto.randomUUID()}
              >
                <div className="h-[160px] w-[220px] object-cover rounded-xl bg-slate-300"></div>
                <div className="mt-2 w-[220px] h-7 bg-slate-300 rounded-xl"></div>
                <div className="mt-2 w-[220px] h-7 bg-slate-300 rounded-xl"></div>
                <div className="mt-2 w-[220px] h-7 bg-slate-300 rounded-xl"></div>
                <div className="mt-2 w-[100px] h-7 bg-blue-300 rounded-xl"></div>
              </div>
            );
          })}
      </div>
    </>
  );
}
