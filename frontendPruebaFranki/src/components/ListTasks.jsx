import Task from "./Task.jsx";

const ListTasks = ({tasks}) => {
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