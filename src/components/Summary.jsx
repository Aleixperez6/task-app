import React from 'react';
import icon from '../papel.png';

export function Summary({taskCompleted, taskUnCompleted}) {
  return (
    <>
    {/* <h3 className='text-green-500'>Tareas completadas: {taskCompleted} </h3> */}
    <span className='relative'>
      <img className='relative' width={'70px'} src={icon} alt="icon"/>
      <span className='absolute top-20 right-3  text-white bg-red-300 p-2 rounded-full'> {taskUnCompleted} </span>
    </span>
    </>
  )
}
