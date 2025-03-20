import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Task from "./Task.jsx";
import { getTasks } from "../redux/tasksSlice.js";

const ListTasks = () => {
    const tasks = useSelector((state) => state.tasks);    const dispatch = useDispatch();

    useEffect( () => {
        axios.get("http://localhost:3000/tasks")
            .then(res => dispatch(getTasks(res.data)))
            .catch(err => console.log(err))
    }, [dispatch])

    return(
        <>
            <h2>Lista de Tareas</h2>
            {tasks.map((task) => {
                return (
                        <Task key={task.id} title={task.title} description={task.description}/>
                )
            })}
        </>
    )
};

export default ListTasks;