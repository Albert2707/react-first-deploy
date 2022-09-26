import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [msg, setMsg] = useState("");

  

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title === "" || description === ""){
      setMsg("Debe llenar todos los campos")
      return
        }
    createTask({
      title,
      description,
    });
    if( title !== "" && description !== ""){
      setTitle("");
      setDescription("");
    }

  };



  return (
<div className="max-w-md mx-auto">
<form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
  <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>

  <h1 className="text-xl font-semibold text-red-500 text-center mb-3 ">{msg}</h1>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          setTitle(e.target.value);
          setMsg("")
        }}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2 rounded"
        autoFocus
      />
      <textarea
        onChange={(e) => {
          setDescription(e.target.value);
          setMsg("")
        }}
        placeholder="Escribe descripcion de tu tarea"
        value={description}
        className="bg-slate-300 p-3 w-full mb-2 rounded"

      ></textarea>

      <button className="bg-indigo-500 px-3 py-1 text-white rounded">Save</button>
    </form>
</div>
  );
}

export default TaskForm;
