const express = require("express");
const taskModel = require("./dbmodel.js");
const cors = require("cors");
const router = express();

router.use(cors());
router.use(express.json());

//GET REQUEST
router.get("/todos", async(req, res) => {
    try {
        const task = await taskModel.find({});
        if(!task){
            res.status(400).send({message:"no record"});
        }else{
            res.status(200).send(task);
        }
    } catch (error) {
        
    }
})

//POST REQUEST
router.post("/add", async (req, res) => {
    try {
      if (!req.body.task) {
        res.status(400).send({ msg: "empty task field" });
      }
      const newTask = {
        task: req.body.task,
      };
      const task = await taskModel.create(newTask);
      return res.status(200).send(task);
    } catch (error) {
      console.log(error);
    }
  });
  

  router.put("/update/:id", async (req, res) => {
    const _id = req.params.id;
    taskModel.findByIdAndUpdate({_id},{done: true})
    .then((result) => res.json(result))
    .catch((error) => console.log(error))
  })

  router.delete("/delete/:id", async (req, res) => {
    const _id = req.params.id;
    taskModel.findByIdAndDelete({_id})
    .then((result) => res.json(result))
    .catch((error) => console.log(error))
  })

module.exports = router;
