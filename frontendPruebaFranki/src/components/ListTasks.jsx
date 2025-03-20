import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Task from "./Task.jsx";

const ListTasks = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    useEffect( () => {

    }, [dispatch])

    return(
        <>
            <h2>Lista de Tareas</h2>
            {tasks.map((task) => {
                return (
                    <>
                        <Task title={task.title} description={task.description}/>
                    </>
                )
            })}
        </>
    )
};

export default ListTasks;