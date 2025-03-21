import Task from "./Task.jsx";
import "./ListTasks.css"

//Componente para mostrar tareas
const ListTasks = ({ tasks, deleteTask, putTask }) => {
  return (
    <>
    <div>
      <h2>Lista de Tareas</h2>
      {tasks.map((task) => {
        return (
          <Task
            id={task.id}
            editTask={putTask}
            onDeleteTask={deleteTask}
            key={task.id}
            title={task.title}
            description={task.description}
          />
        );
      })}
      </div>
    </>
  );
};

export default ListTasks;
