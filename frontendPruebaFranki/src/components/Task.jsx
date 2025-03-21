import { useState } from "react";
import "./Task.css"

//Componente para crear tareas
const Task = ({ title, description, onDeleteTask, editTask, id }) => {
  //Verifica para editar
  const [edit, setEdit] = useState(false);

  //Actualiza la data
  const [formData, setFormData] = useState({
    title,
    description,
  });

  //Sobreescribe la data correspondiente
  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  //Ejecuta la edicion de una tarea
  const handleOnSubmit = (event) => {
    event.preventDefault();
    editTask(id, formData);
    setEdit(false);
  };

  //Cancela edicion
  const handleEdit = () => {
    setEdit(false);
    setFormData({ title, description });
  };

  return (
    <>
      {edit ? (
        <form onSubmit={handleOnSubmit} className="form">
          <div className='form_div'>
            <p className="text">Titulo</p>
              <label className="form_label">
              <input
                className="form_input"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleOnChange}
              ></input>
            </label>
            <p className="text">Descripcion</p>
            <label className="form_label">
              <textarea
                type="text"
                name="description"
                value={formData.description}
                onChange={handleOnChange}
              ></textarea>
            </label>
            <button type="submit" className="button_accept">Aceptar</button>
            <button onClick={handleEdit} className="button_delete">Cancelar</button>
          </div>
        </form>
      ) : (
        <div className="div_div">
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={() => setEdit(true)} className="button_edit">Editar</button>
          <button onClick={() => onDeleteTask(id)} className="button_delete">Eliminar</button>
        </div>
      )}
    </>
  );
};
export default Task;
