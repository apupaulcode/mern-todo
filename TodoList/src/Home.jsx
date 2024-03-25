import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3001/get')
    .then(result=>setTodos(result.data))
    .catch(err=>console.log(err));
  },[])
  return (
    <div>
      <h2>Todo List</h2>
      <Create />
      {todos.map(todo => {
          <div>
            <p>{todo.task}</p>
          </div>;
      }
      )}
    </div>
  );
};

export default Home;
