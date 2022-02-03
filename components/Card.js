import React from "react";
import Link from 'next/link'

export default function Card({data}) {

  const due =new Date(data.due)
  return (
    <Link href={`/task/${data._id}`}>
      <div className="cursor-pointer max-w-sm rounded-lg overflow-hidden shadow-lg  bg-white my-3">
        <div className="px-3 py-3">
          <div className="font-bold text-xl mb-1 flex flex-row items-center text-grey-500">
            {data.name}
          </div>
          <span className="inline-block mt-0 bg-cyan-200 rounded px-2 py-1 text-sm">
            {data.category}
          </span>
        </div>
        <div className="grid grid-cols-2 mb-3 ">
          <div className="px-3 pt-2 ">
            <h5 className="text-slate-500">Priority</h5>
            <span className=" inline-block mt-2 bg-teal-200 rounded px-2 py-1 text-sm">
              {data.priority}
            </span>
          </div>
          <div className="px-3 pt-2 ">
            <h5 className="text-slate-500">Due</h5>
            <span className="inline-block mt-2 bg-amber-200 rounded px-2 py-1 text-sm">
              {due.getDate() +
                " " +
                due.toLocaleString("en-us", { month: "short" }) +
                " "}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}


