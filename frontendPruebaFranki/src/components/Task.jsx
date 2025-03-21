import { useState } from 'react'

//Componente para crear tareas
const Task = ({title, description, onDeleteTask, editTask, id}) => {
    
    //Verifica para editar
    const [edit, setEdit] = useState(false)

    //Actualiza la data
    const [formData, setFormData] = useState({
        title,
        description
    })

    //Sobreescribe la data correspondiente
    const handleOnChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    //Ejecuta la edicion de una tarea
    const handleOnSubmit = (event) => {
        event.preventDefault();
        editTask(id, formData)
        setEdit(false);
    }

    //Cancela edicion
    const handleEdit = () => {
        setEdit(false);
        setFormData({title, description})
    }
    
    return(
        <>
            {edit ?
                <form onSubmit={handleOnSubmit}>
                    <label>
                        Titulo
                    <input type='text' name='title' value={formData.title} onChange={handleOnChange}></input>
                    </label>
                    <label>
                        Descripcion
                    <textarea type='text' name='description' value={formData.description} onChange={handleOnChange}></textarea>
                    </label>
                    <button type="submit">Aceptar</button>
                    <button onClick={handleEdit}>Cancelar</button>
                </form>
            :
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <button onClick={() => setEdit(true)}>Editar</button>
                    <button onClick={() => onDeleteTask(id)}>Eliminar</button>
                </div>
            }
        </>
    )
}
export default Task;