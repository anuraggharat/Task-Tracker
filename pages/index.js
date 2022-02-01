import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Card from "../components/Card";
import axios from 'axios';



export default function Home(props) {


  const {tasks} = props.pageProps

      const todos = tasks.filter((item) => (item.status == "Todo"));
      const doing = tasks.filter((item) => (item.status == "Doing"));
      const done = tasks.filter((item) => (item.status == "Done"));

  





  return (
    <div className="w-100 ">
      <Header />
      <div className="grid grid-cols-3 gap-8 mt-10">
        <div className="">
          <h3>Todo</h3>
          {todos.map((todo, index) => (
            <Card data={todo} key={index} />
          ))}
        </div>
        <div className="">
          <h3>In Progress</h3>
          {doing.map((doing, index) => (
            <Card data={doing}
             key={index} />
          ))}
        </div>

        <div className="">
          <h3>Completed</h3>
          {done.map((done, index) => (
            
            <Card data={done} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await axios("http://localhost:3000/api/task");
  const {tasks } = res.data;
  return {
    props: { tasks: tasks },
  };
}