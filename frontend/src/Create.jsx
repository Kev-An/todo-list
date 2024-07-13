import React, {useState} from "react";
import axios from "axios";

function Create() {
    const [task, setTask] = useState();
    const handleAdd = () => {
        
        axios.post("http://localhost:5000/api/add",{task:task})
        .then((res) => {
          location.reload();
        })
        .catch((error)=>console.log(error))
    }
  return (
    <div className="flex space-x-2 justify-center my-4">
      <input
        onChange={(e) => setTask(e.target.value)}
        type="text"
        className="border border-black  px-3 py-1"
        placeholder="Enter task"
      />
      <button onClick={handleAdd} className="bg-black text-white px-4 py-1 hover:shadow-md hover:ring-2 hover:ring-black hover:ring-opacity-50">
  Add
</button>

    </div>
  );
}

export default Create;
