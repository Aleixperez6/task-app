import clsx from "clsx";

export function Task({id , name, description, isDone, onComplete, onClick, onDelete}) {


    const style = isDone ? 'bg-green-200 ' : 'border-slate-200 bg-slate-50';
    const tick = isDone && 'bg-gray-600'; 

    const handleClick = (event) => {
        onComplete(id);
        // onClick(event);
    }

    const handleDelete = (event) =>{
      onDelete(id)
      // console.log('clicked delete', id);
    }

  return (
    <div className={clsx("p-4 rounded-lg border cursor-pointer text-stone-800 font-semibold shadow-sm bg-opacity-60 bg-clip-padding", style)} >
        <h2 className='text-bold text-lg underline pb-2  '>{name}</h2>
        <p className="text-sm pb-4">{description}</p>
        <button onClick={handleDelete} className="text-white p-2 mr-4 rounded-md bg-red-200 hover:bg-red-400 font-bold">X</button> 
        <span onClick={handleClick} className={clsx("p-2 text-white font-bold bg-green-200 hover:bg-green-400", tick)} >✓</span>
    </div>
  )
}
