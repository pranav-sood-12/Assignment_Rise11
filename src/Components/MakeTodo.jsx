import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/MakeTodo.css';

const MakeTodo = () => {

  const location = useLocation();
  let { name } = location.state;
  name = name.charAt(0).toUpperCase() + name.slice(1);


  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let fullDate = `${day}-${month}-${year}`;


  let [form, setForm] = useState({ title: '', taskDetails: '', time: fullDate });
  let [tasks, setTasks] = useState([]);
  let [completedTasks,setCompletedTasks] = useState([]);

  const onChange = (e) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Perform your form submission logic here
    // You can check if the required fields are filled before proceeding

    if (form.title && form.taskDetails) {
      setTasks((prevTasks) => [...prevTasks, form]);
      setForm((prevForm) => ({ ...prevForm, title: '', taskDetails: '' }));
    } else {
      alert('Please fill out the required fields.');
    }
  };



  const handleClick = (id) =>{
    console.log(tasks[id]);
    setCompletedTasks((prevTasks) => [...prevTasks, tasks[id]]);


    const updatedTasks = tasks.filter((value,idx)=>{
      return idx!==id
    })
    setTasks(updatedTasks)
  }

  return (
    <>
      <div className="top">
        <p>Welcome back!</p>
        <p>{name}</p>
      </div>

      <div className="addTask">
      <p>Create a new task </p>
      <form onSubmit={onSubmit}>
        <div className="forms">
          <label htmlFor="title">Task title :</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
            name="title"
            value={form.title}
            onChange={onChange}
            required
          />
        </div>
        <div className="forms">
          <label htmlFor="taskDetails">Your Task Details :</label>
          <input
            type="text"
            className="form-control"
            id="taskDetails"
            placeholder="Please Write your Task Details :"
            name="taskDetails"
            value={form.taskDetails}
            onChange={onChange}
            required
          />
        </div>

        <div className="forms">
          <label htmlFor="time">Date :</label>
          <input
            type="date"
            className="form-control"
            id="time"
            name="time"
            onChange={onChange}
          />
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>

      <div className="completedTasks">
        {(completedTasks.length > 0) && <p className='ongoing-tasks'>Completed Tasks :</p>}
        <div className="completed-todo">
        {completedTasks.map((value, index) => (
            <div className='ctodo'>
              <p className='cfirstTODO'>{value.title}</p>
              <p className='csecondTODO'>{value.taskDetails}</p>
              <p className='cthirdTODO'>{value.time}</p>
            </div>
        ))}
        </div>
      </div>

      <div className="showTasks">
        {(tasks.length > 0) &&<p className='ongoing-tasks'>Ongoing Tasks :</p>}
        { tasks.map((value, index) => {
          return (
            <div className='todo' key={index}>
              <p className='firstTODO'>{value.title}</p>
              <p className='secondTODO'>{value.taskDetails}</p>
              <p className='thirdTODO'>{value.time}</p>
              <button className='completed-button' onClick={()=>handleClick(index)}>Completed?</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MakeTodo;
