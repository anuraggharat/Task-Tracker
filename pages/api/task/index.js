



export default function handler(req, res) {

    const {method} = req

    switch (method) {
      case "GET":
          console.log(req.query)
        res.status(200).json({ name: "GET" });

        break;

      case "POST":
        res.status(200).json({ name: "POST" });

        break;

      default:
        break;
    }




}
