export default function handler(req, res) {
  const { method } = req;

  switch (method) {

    case "GET":
        //todo 
        //return a task

        break;

    case "PUT":
        //todo
        //make a edit task request
        console.log(req.query)
        res.status(200).json({ name: req.query });
        break;

    case "DELETE":
        //todo 
        // delete task request
        res.status(200).json({ name: "POST" });

        break;

    default:
      break;
  }
}
