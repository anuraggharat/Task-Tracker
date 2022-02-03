import axios from "axios";
import { Router,useRouter } from "next/router";
import React,{useState,useEffect} from "react";


export default function Task() {

const router = useRouter()

const [alert,setAlert] = useState(false)
const [message, setMessage] = useState("");
    
const [values, setValues] = useState({
  name: "",
  category: "House",
  due: "",
  priority: "High",
  status:"Todo"
});



const addTask=async(e)=>{
  setAlert(false)
  e.preventDefault()
  try {
    const { data } = await axios.post(`${process.env.URL}/api/task`, values);
    if(data.success){
    
      router.push("/")
    }
    else{
      console.log(data.message);


    }
  } catch (error) { 
    console.log(error)
    
  }
}
  console.log(values)

const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
}

    return (
      <div className="w-100 ">
        <div className="container text-center py-5 mb-2">
          <h2 className="text-3xl font-bold">Add a New Task</h2>
        </div>
        <form className="w-1/2  mx-auto">
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
                className="bg-white appearance-none border border-gray-200 rounded w-full  px-3 py-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
                <option value="Project">Project</option>
                <option value="Study">Study</option>
                <option value="Social Media">Social Media</option>
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
                className="bg-white appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
                onClick={(e) => addTask(e)}
              >
                Add Task
              </button>
            </div>
          </div>
        </form>
      </div>
    );
}
