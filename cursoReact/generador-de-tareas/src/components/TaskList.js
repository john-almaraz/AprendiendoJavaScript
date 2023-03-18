import React from "react";
import '../stylesheets/TaskList.css'
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useState } from "react";

function TaskList(){
  const [tasks,setTask] = useState([]);

  const addTask = task => {
    if(task.text.trim()){
      task.text = task.text.trim();

      const updateTasks = [task,...tasks];
      setTask(updateTasks);
    }
  };

  const deleteTask = id =>{
    const updateTasks = tasks.filter(task => task.id !== id);
    setTask (updateTasks);
  };

  const completeTask = id =>{
    const updateTasks = tasks.map(task =>{
      if (task.id === id){
        task.completed = !task.completed;
      }
      return task;
    });
    setTask(updateTasks);
  };

  return(
    <>
      <TaskForm onSubmit={addTask} />
      <div className="container-task-list">
        {
          tasks.map((task)=>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}  
              taskDelete={deleteTask}
              taskCompleted={completeTask}
            />
          )
        }
      </div>
    </>
  );
}
export default TaskList;