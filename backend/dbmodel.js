const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default : false
    }
  }
);

const taskModel = mongoose.model("Tasks", taskSchema);
module.exports = taskModel;
