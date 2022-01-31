import Task from "../../../models/Task";

export default async function handler(req, res) {
  const { method,query } = req;
  console.log(query)
  switch (method) {

    case "GET": 
    try {

        const task = await Task.findById(query.id);
        res.status(200).json({ status: 200, task: task, success: true });

    } catch (error) {
                    res
                      .status(400)
                      .json({
                        success: false,
                        message: "Unable to find task!",
                      });

    }

    break;

    case "PUT":
    try {
        const task = await Task.findByIdAndUpdate(query.id,req.body,{
          new:true,
          runValidators:true
        });
        res.status(200).json({ status: 200, task: task, success: true });

    } catch (error) {
                    res
                      .status(400)
                      .json({
                        success: false,
                        message: "Unable to update task!",
                      });

    }

    case "DELETE":
        
                try {
                  const task = await Task.findByIdAndDelete({_id:query.id});

                  res.status(200).json({ status: 200, task: task, success: true ,message:`Deleted task ${task.name}`});
                } catch (error) {
                  res.status(400).json({
                    success: false,
                    message: "Unable to delete task!",
                  });
                }
        break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
