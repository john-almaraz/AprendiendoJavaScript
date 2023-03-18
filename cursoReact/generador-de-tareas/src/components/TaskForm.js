import React ,{useState} from "react";
import '../stylesheets/Form.css'
import {v4 as uuidv4} from 'uuid'

function Form(props){
  const [input,setInput] = useState('');

  const changeManage = e => {
    setInput(e.target.value);    
  };

  const sendManage = e => {
    e.preventDefault();    
    const newTask = {
      id:uuidv4(),
      text:input,
      completed:false
    }     
    props.onSubmit(newTask);
    console.log(e);
  };

  return (
    <form 
      className='task-form'
      onSubmit={sendManage}
    > 
      <input
        className='task-input'
        type='text'
        placeholder="Write a task"
        name='text'
        onChange={changeManage}
      />
      <button className="task-button">
        Add task
      </button>
    </form>
  );
};
export default Form;