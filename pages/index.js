import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Card from "../components/Card";



export default function Home() {
  return (
    <div className="w-100 ">
      <Header />
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
    </div>
  );
}
