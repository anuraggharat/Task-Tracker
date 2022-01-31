import React from "react";
import Link from 'next/link'

export default function Card({task}) {
  return (
    <Link href={`/task`}>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-100 my-3">
        <div className="px-3 pt-3 pb-1">
          <div className="font-bold text-xl mb-1 flex flex-row items-center text-grey-500">
            The Coldest Sunset
          </div>
          <span className="inline-block mt-0 bg-red-200 rounded px-2 py-1 text-sm">
            Freelancing
          </span>
        </div>
        <div className="grid grid-cols-2 mb-3 mt-2">
          <div className="px-3 pt-2 ">
            <h5 className="text-slate-500">Priority</h5>
            <span className=" inline-block mt-2 bg-red-200 rounded px-2 py-1 text-sm">
              High
            </span>
          </div>
          <div className="px-3 pt-2 ">
            <h5 className="text-slate-500">Due</h5>
            <span className="inline-block mt-2 bg-orange-200 rounded px-2 py-1 text-sm">
              Sunday
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}


