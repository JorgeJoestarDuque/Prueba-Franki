import Task from "./Task.jsx";

//Componente para mostrar tareas
const ListTasks = ({ tasks, deleteTask, putTask }) => {
  return (
    <>
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
    </>
  );
};

export default ListTasks;
