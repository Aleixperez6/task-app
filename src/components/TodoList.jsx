import React, { useState, useEffect } from 'react';
// import {v4 as uuidv4}  from 'uuid/v4';
import {initialTasks} from '../data.js';
import { Input } from './Input.jsx';
import { Summary } from './Summary.jsx';
import { Task } from './Task.jsx';
// import uniqid from 'uniqid';

const KEY = 'toDoApp';

var uniqid = require('uniqid');

export function TodoList() {

    const [tasks, setTasks] = useState(initialTasks);
    console.log(uniqid());

    useEffect(()=>{
        const storedTasks = JSON.parse(localStorage.getItem(KEY));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, [])

    useEffect(() => {
          localStorage.setItem(KEY, JSON.stringify(tasks))
    }, [tasks])
    

    const handleComplete = (id) => {
        // console.log(id);

        const newTasks = tasks.map((task) => {
            if (task._id === id) {
                task.isDone = !task.isDone; // lo contrario boolean
                return {...task}
            }
            return {...task};
        })

        setTasks(newTasks);
     };
     const deleteTask = (id) => {
         console.log(id);
 
         const newDelete = tasks.filter((task) => {
             return task._id !== id;
         })
 
         setTasks(newDelete);
      };

    

    //  const tasksCompleted = tasks.filter(task => task.isDone).length;
     const tasksUnCompleted = tasks.filter(task => !task.isDone).length;
     //isDone se acumula al ser booleano

    const handleAdd = (form) => {
        setTasks((prev)=>{
            return [...prev, {
                
                    _id: `${uniqid()}`,
                    name: form.name,
                    description: form.description,
                    isDone: false
                    
                
            }]
        })
    }

   function sortByDone(){
       const clone = [...tasks];
       clone.sort((a,b)=>{
           return a.isDone - b.isDone;
       })
       setTasks(clone)
   }
   function sortByToDo(){
    const clone = [...tasks];
    clone.sort((a,b)=>{
        return b.isDone - a.isDone;
    })
    setTasks(clone)
}
console.log(tasks);
  return (
      <div className='p-4 font-bold'>
        <h1 className='text-xl pb-4'>WORK TASK</h1>
        <Input onAdd={handleAdd}/>
        <Summary  // taskCompleted={tasksCompleted} 
        taskUnCompleted={tasksUnCompleted}/>

        {/* <Summary taskUnCompleted={tasksUnCompleted}/> */}
        <span>
        <button className='mt-5 mb-2 mr-5 bg-red-300 text-white p-3 rounded-md' onClick={sortByDone}>Uncompleted up</button>
        <button className='mt-5 mb-2 bg-green-300 text-black p-3 rounded-md ' onClick={sortByToDo}>Completed up</button>
        </span>
        <div className='flex flex-col gap-y-4  pt-4'>

        {tasks.map( (task) => 
        <Task 
        id={task._id}
        key={task._id} 
        name={task.name} 
        description={task.description} 
        isDone={task.isDone}  
        onComplete={handleComplete}
        onDelete={deleteTask}
        />  )}
        </div>

      </div>


  )
}
