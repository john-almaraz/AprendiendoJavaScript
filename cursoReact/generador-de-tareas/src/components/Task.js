import React from "react";
import '../stylesheets/Task.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'

function Task({ id, text, completed, taskCompleted, taskDelete}){
  return(
    <div className={`container-task ${completed?'completed':''}`.trim()}>
      <div 
        className="task-text"
        onClick={ () => taskCompleted(id) }
      >
        {text}
      </div>
      <div 
        className="container-task-icons"
        onClick={ () => taskDelete(id)}
      >
        <AiOutlineCloseCircle className="task-icon" />
      </div>

    </div>
  );
};
export default Task;