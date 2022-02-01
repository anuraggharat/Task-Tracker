import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex flex-row w-100 justify-between content-center items-center">
      <div>
        <h1 className="text-slate-800 hover:text-sky-400 text-2xl">
          Task Tracker
        </h1>
      </div>
      <div>
        <Link href={"/task"}>
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add New
          </a>
        </Link>
      </div>
    </div>
  );
}
