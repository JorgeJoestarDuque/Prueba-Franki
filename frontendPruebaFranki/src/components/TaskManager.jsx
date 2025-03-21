import { useState } from "react";
import "./TaskManager.css";

const TaskManager = ({ onPostTask }) => {
  //Tarea sin crear
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  //Sobreescribe la data correspondiente
  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  //Publica la data
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onPostTask(formData);
    setFormData({ title: "", description: "" });
  };
  return (
    <>
      <div>
        <form onSubmit={handleOnSubmit} className="form">
          <h2 className="form_title">Gestor de tareas</h2>
          <p className="text">Titulo</p>
          <label className="form_label">
            <input
              className="form_input"
              placeholder=""
              type="text"
              name="title"
              value={formData.title}
              onChange={handleOnChange}
            />
            <span className="form_text">Ingresa el titulo.</span>
          </label>
          <p className="text">Descripción</p>
          <label className="form_label">
            <textarea
              className="form_input"
              placeholder=""
              type="text"
              name="description"
              value={formData.description}
              onChange={handleOnChange}
            />
            <span className="form_text">
              Ingresa la descripcion(Es opcional).
            </span>
          </label>
          <button className="form_submit" type="submit">
            Crear
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskManager;
