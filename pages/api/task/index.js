import dbConnect from "../../../db/dbconnect";
import Task from "../../../models/Task";

dbConnect();
export default async (req, res)=>{
    const { method } = req;
    switch (method) {
    
    //get all tasks
    case "GET":
                try {
                    const tasks = await Task.find({})
                    res.status(200).json({success:true,tasks})

                } catch (error) {
                    res.status(400).json({success:false,message:"Unable to find Tasks"})
                }
                break;
    //post a new task
    case "POST":
                try {
                    const task = await Task.create(req.body)
                    res.status(200).json({status:300,success:true,task:task,message:"New Task Added"})

                } catch (error) {
                    console.log("in Error");
                    res.status(400).json({success:false,message:"Unable to Create Task",error:error})
                }
                break;


    default:
                res.status(400).json({ success: false });
                break;
  }
}
