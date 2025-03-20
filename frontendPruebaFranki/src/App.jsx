import { useEffect, useState } from 'react'
import './App.css'
import ListTasks from './components/ListTasks'
import axios from "axios";
import TaskManager from './components/TaskManager'

function App() {
 const [tasksData, setTasksData] = useState([])

 const getTasks = async () => {
  const res = await axios.get("http://localhost:3000/tasks")
  setTasksData(res.data)
 }
 const postTask = async (task) => {
  try {
    await axios.post("http://localhost:3000/tasks", task)
    getTasks();
  } catch (err) {
    console.log(err)
  }
 }

  useEffect( () => {
    axios.get("http://localhost:3000/tasks")
        .then(res => setTasksData(res.data))
        .catch(err => console.log(err))
  }, [tasksData])

  return (
    <>
      <ListTasks tasks ={tasksData}/>
      <TaskManager onPostTask={postTask}/>
    </>
  )
}

export default App
