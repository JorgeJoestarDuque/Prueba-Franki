import { useState } from "react";

const TaskManager = () => {
    const [formData, setFormData] = useState({
        title:"",
        description:""
    })

    const handleOnChange = (event) => {
        setFormData({
            title: event.target.value
        })
    }
    return(
        <>
            <div>
                <h2>Gestor de tareas</h2>
                <form>
                    <label>
                        Titulo
                        <input type="text" name="title" value={formData.title} onChange={}/>
                    </label>
                    <label>
                        Descripción
                        <textarea type="text" name="description" value={formData.description} onChange={}/>
                    </label>
                    <button type="submit">Crear</button>
                </form>
            </div>
        </>
    )
}

export default TaskManager;