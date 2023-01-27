// import logo from "./logo.svg";
import "./App.css";
import Header from "./Mycomp/Header";
import { Footer } from "./Mycomp/Footer";
import { About } from "./Mycomp/About";
import { Todos } from "./Mycomp/Todos"; // use{} for named export for using using values
import React, { useState, useEffect } from "react";
import { AddTodo } from "./Mycomp/AddTodo";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  //start karte huye kya condition hai
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log("i am ondelete todo", todo);
    // Deleting this way in react does not work
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    // console.log("this gonna be add", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    // console.log(myTodo);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // immidiately not change so use useeffect
  return (
    <>
      <Router>
        <Header change="about" searchbar={1} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App; // direct file export kar rahe na ki ek ek value ko
