// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


// apis i need are 
// localhost:3000/api/task -> all tasks / post -> add a new task

// localhost:300/api/task/12124 -> edit task / Delete task