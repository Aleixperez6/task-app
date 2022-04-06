import { useState } from "react";

export function Input({onAdd}) {

    const [form, setForm] = useState({
        name: '',
        description:''
    });
    // const [description, setDescription] = useState('');

    const handleForm = (e) => {
        setForm((prev)=>{
            return{
                ...prev,
                [e.target.name] : e.target.value
            }
        });
     }
     const handleClick= () => {
        onAdd(form);
        setForm({
            name:'',
            description:''
        })
     }
  return (
      <>
      <input 
      autoComplete="off"
      name="name"
      type={"text"} 
      placeholder={"Task name"} 
      className="p-4 rounded-md w-full mb-4 focus:outline-none" 
      value={form.name} 
      onChange={handleForm} />
      <textarea 
      autoComplete="off"
      name="description"
      type={"text"} 
      placeholder={"Task description"} 
      className="p-4 rounded-md w-full mb-4 focus:outline-none" 
      value={form.description} 
      onChange={handleForm} />


      <button 
      className="p-3 mb-14 rounded-md bg-indigo-400 font-semibold text-white" onClick={handleClick}>Add task</button>
      </>
  )
}
