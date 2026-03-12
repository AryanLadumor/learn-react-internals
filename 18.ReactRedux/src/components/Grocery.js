import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleTask , updateTask} from "../utils/todoSlice";
const Grocery = () => {
  const [task, setTask] = useState("");
  const [id, setId] = useState("");
  const [updatedTaskTASK , setUpdatedTask] = useState("")

  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.todo.tasks);

  const handleClickAdd = (id) => {
    dispatch(addTask({ task, isCompleted: false, id }));
    setTask("");
    setId("");
  };

  const handleClickDelete = (i, id) => {
    dispatch(removeTask({ index: i, id }));
  };

  const handleClickToggle = (id) => {
    dispatch(toggleTask(id));
  };
  const handleClickUpdate = (id) =>{
    dispatch(updateTask({id , updatedTaskTASK}))
    setUpdatedTask("")
  }

  return (
    <div className="w-4/12 mx-auto text-center">
      <h1 className="text-5xl"> Add Your Tasks </h1>
      <div className="m-4 p-1 border-b-4 border-b-red-300 ">
        <input
          className="border m-2 p-1 "
          placeholder="Add You task"
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <input
          className="border m-2 p-1 w-10 "
          placeholder="Id"
          type="text"
          onChange={(e) => setId(e.target.value)}
          value={id}
        />
        <button
          className="bg-red-300 w-20 h-9 rounded-xl hover:scale-105 transition duration-100"
          onClick={() => {
            handleClickAdd(id);
          }}
        >
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <h1>Add Some task</h1>
      ) : (
        <div>
          {tasks.map((task, i) => {
            return (
              <div
                key={task.id}
                className=" m-2 p-2 flex justify-between  rounded-4xl shadow-sm bg-fuchsia-100 hover:scale-[1.01] transition duration-100"
              >
                <span className=" p-4 text-xl ">
                  <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => {
                      handleClickToggle(task.id);
                    }}
                  />{" "}
                  <label>{task.isCompleted ? "Done" : "remaning"}</label>
                </span>
                <span className=" p-4 ">
                  <div>
                    <h3 className="text-3xl">{task.task}</h3>
                    <input type="text" value={updatedTaskTASK} placeholder="update task"  onChange={(e)=>{setUpdatedTask(e.target.value)}} />
                    {console.log(updatedTaskTASK)/*====================================================*/}
                    <button className="bg-red-300 w-20 h-9 rounded-xl hover:scale-105 transition duration-100" onClick={()=>{handleClickUpdate(task.id)}} >Update</button>
                  </div>
                </span>
                <span className=" p-4">
                  <button
                    className="bg-red-300 w-20 h-9 rounded-xl hover:scale-105 transition duration-100"
                    onClick={() => {
                      handleClickDelete(i, task.id);
                    }}
                  >
                    Delete
                  </button>
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Grocery;
