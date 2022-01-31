import React from "react";
import Card from "./Card";

export default function Body() {
  return (
    <div className="grid grid-cols-3 gap-8 mt-10">
      <div className="">
        <h3>Todo</h3>
        <Card />
        <Card />

        <Card />
      </div>
      <div className="">
        <h3>In Progress</h3>
        <Card />

        <Card />
      </div>

      <div className="">
        <h3>Completed</h3>
        <Card />
      </div>
    </div>
  );
}
