import { useEffect, useState } from 'react'
import './App.css'
import ListTasks from './components/ListTasks'
import axios from "axios";
import TaskManager from './components/TaskManager'

function App() {
 const [tasksData, setTasksData] = useState([])

 //Consigue la data con get
 const getTasks = async () => {
  const res = await axios.get("http://localhost:3000/tasks")
  setTasksData(res.data)
 }

//Coloca un Item en db con post
 const postTask = async (task) => {
  try {
    await axios.post("http://localhost:3000/tasks", task)
    getTasks();
  } catch (err) {
    console.log(err)
  }
 }

 //Elimina un dato en la db con Delete
 const deleteTask = async (idTask) =>{
  try {
    await axios.delete(`http://localhost:3000/tasks/${idTask}`)
    getTasks();
  } catch(err) {
    console.log(err)
  }
 }

 //Actualiza el item con put
 const putTask = async (idTask, bodyTask) =>{
  try {
    await axios.put(`http://localhost:3000/tasks/${idTask}`, bodyTask)
    getTasks();
  } catch(err) {
      console.log(err)
  }
 }

 //Actualiza la data
  useEffect( () => {
    axios.get("http://localhost:3000/tasks")
        .then(res => setTasksData(res.data))
        .catch(err => console.log(err))
  }, [tasksData])

  //Componentes hijos con parametros del componente padre
  return (
    <>
      <ListTasks tasks ={tasksData} deleteTask={deleteTask} putTask={putTask}/>
      <TaskManager onPostTask={postTask}/>
    </>
  )
}

export default App