import axios from "axios";
import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";



function EditTask({pageProps}) {
  console.log("in edit task", pageProps);
  const router = useRouter();
  const id = router.query.id;
  const data = pageProps.task;
  const [values, setValues] = useState({
    name: data.name,
    category: data.category,
    due: data.due,
    priority: data.priority,
    status: data.status,
  });

  console.log(values)

  const updateTask = async() => {
    console.log("sending for update",values)
   try {
     const res = await axios(`http://localhost:3000/api/task/${data._id}`, {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
       },
       data: JSON.stringify(values),
     });
     console.log(res)
     Router.push("/");
   } catch (error) {
     console.log(error);
   }
  };

  const deleteTask =async () =>{
    try {
        const res =await axios.delete(`http://localhost:3000/api/task/${data._id}`);
        alert(res.data.message)
        router.push("/")
        } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');      
    }
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-100 ">
      <div className="container text-center py-5 mb-2">
        <h2 className="text-3xl font-bold">Add a New Task</h2>
        <p>{data._id}</p>
      </div>
      <form className="w-full  mx-auto">
        <div className="md:flex md:items-center mb-6 mx-auto">
          <div className="md:w-1/3 mx-auto">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="task-name"
            >
              Task Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="task-name"
              type="text"
              name="name"
              value={values.name}
              placeholder="Name your Task"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="category"
            >
              Category
            </label>
          </div>
          <div className="md:w-2/3 relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="category"
              name="category"
              defaultValue={values.category}
              onChange={(e) => handleChange(e)}
            >
              <option value="House">House</option>
              <option value="Personal">Personal</option>
              <option value="Freelancing">Freelancing</option>
              <option value="Work">Work</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="due-date"
            >
              Due Date
            </label>
          </div>
          <div className="md:w-2/3 relative">
            <input
              className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="due-date"
              type="date"
              name="due"
              value={values.due}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="priority"
            >
              Priority
            </label>
          </div>
          <div className="md:w-2/3 relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="priority"
              name="priority"
              defaultValue={values.priority}
              onChange={(e) => handleChange(e)}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="priority"
            >
              Status
            </label>
          </div>
          <div className="md:w-2/3 relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="task"
              name="status"
              defaultValue={values.status}
              onChange={(e) => handleChange(e)}
            >
              <option value="Todo">Todo</option>
              <option value="Doing">In Progress</option>
              <option value="Done">Done</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={(e) => updateTask(e)}
            >
              Add Task
            </button>
            <button
              className="shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={(e) => deleteTask(e)}
            >
              Delete Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}


export async function getServerSideProps({ query }) {
  const id = query.id;

  try {
    const res = await axios(
      `http://localhost:3000/api/task/${id}`
    );
    const {task} =res.data;
    return {
      props: { task },
    };
  } catch (error) {
    console.log(error);
  }
}

export default EditTask;
