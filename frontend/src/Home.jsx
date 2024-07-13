import React, { useState, useEffect } from "react";
import Create from "./Create.jsx";
import axios from "axios";
import { BsCircleFill, BsTrash, BsCheckCircleFill } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";

function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/todos")
      .then((res) => setTodos(res.data))
      .catch((error) => console.log(error));
  }, []);
  const handleEdit = (id) => {
    axios
      .put("http://localhost:5000/api/update/"+id)
      .then((res) =>{
        location.reload();
      })
      .catch((error) => console.log(error))
  }
  const HandleDelte = (id) => {
    axios.delete("http://localhost:5000/api/delete/"+id)
    .then((res) =>{
      location.reload();
    })
    .catch((error) => console.log(error))
  }

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-center text-6xl text-white bg-black p-4">
        Todo List 
      </h2>
      <Create />
      {todos.length === 0 ? (
        <div className="text-center mt-4">
          <h2 className="text-xl">Empty</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div className="flex mt-2 border border-black bg-black text-white p-4 w-[345px] mx-auto items-center">
            <div onClick ={() => handleEdit(todo._id)}>
              {todo.done ? 
              <BsCheckCircleFill/>
              :<BsCircleFill className="text-white mr-2 cursor-pointer" />}
            </div>
            
            {todo.task}
            <div className="" onClick={() => HandleDelte(todo._id)}>
            <BsTrash className="flex text-red-600 cursor-pointer" />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
