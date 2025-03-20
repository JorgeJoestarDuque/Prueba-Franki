const TaskManager = ({onPostTask}) => {

    const [formData, setFormData] = useState({
        title:"",
        description:""
    })

    const handleOnChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
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