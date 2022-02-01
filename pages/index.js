
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
        <div className="">
          <h3 className="border-b-2 pb-2  text-xl text-slate-700">Todo</h3>
          {todos.map((todo, index) => (
            <Card data={todo} key={index} />
          ))}
        </div>
        <div className="">
          <h3 className="border-b-2 pb-2 text-xl text-slate-700">
            In Progress
          </h3>
          {doing.map((doing, index) => (
            <Card data={doing} key={index} />
          ))}
        </div>

        <div className="">
          <h3 className="border-b-2 pb-2  text-xl text-slate-700">Completed</h3>
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