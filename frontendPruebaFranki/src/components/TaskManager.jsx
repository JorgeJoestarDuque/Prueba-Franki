import { useState } from 'react'

const TaskManager = ({onPostTask}) => {

    //Tarea sin crear
    const [formData, setFormData] = useState({
        title:"",
        description:""
    })

    //Sobreescribe la data correspondiente
    const handleOnChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    //Publica la data
    const handleOnSubmit = (event) => {
        event.preventDefault();
        onPostTask(formData)
    }
    return(
        <>
            <div>
                <h2>Gestor de tareas</h2>
                <form onSubmit={handleOnSubmit}>
                    <label>
                        Titulo
                        <input type="text" name="title" value={formData.title} onChange={handleOnChange}/>
                    </label>
                    <label>
                        Descripción
                        <textarea type="text" name="description" value={formData.description} onChange={handleOnChange}/>
                    </label>
                    <button type="submit">Crear</button>
                </form>
            </div>
        </>
    )
}

export default TaskManager;