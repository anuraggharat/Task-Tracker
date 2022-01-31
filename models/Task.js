const mongoose = require("mongoose")


const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  due: {
    type: Date,
  },
  category: {
    type: String,
  },
  priority: {
    type: String,
  },
  status: {
    type: String,
  },
});


module.exports = mongoose.models.Task || mongoose.model("Task", TaskSchema);
