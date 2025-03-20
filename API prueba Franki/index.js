import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

//Read the db / Json to object
const readData = () => {
  try {
    const data = fs.readFileSync("./db.json");
    return JSON.parse(data);
  } catch (error) {
    console.log(error.message);
  }
};

// Edit the db / Object to Json
const writeData = (data) => {
  try {
    fs.writeFileSync("./db.json", JSON.stringify(data));
  } catch (error) {
    console.log(error.message);
  }
};

// Verify the Item
const validateBody = ({ title, description = "" }) => {
  if (title && title.length <= 100 && description.length <= 200) {
    return true;
  }
  return false;
};

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// All tasks
app.get("/tasks", (req, res) => {
  const data = readData();
  res.json(data.tasks);
});

// Find a only task
app.get("/tasks/:id", (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const task = data.tasks.find((task) => task.id === id);
  res.json(task);
});

// Create a new task
app.post("/tasks", (req, res) => {
  if (validateBody(req.body)) {
    const data = readData();
    const body = req.body;
    const newTask = {
      id: data.tasks.length ?
        data.tasks.reduce(
          (acc, currentItem) => (acc < currentItem.id ? currentItem.id : acc),
          -1
        ) + 1 : 1,
      ...body,
    };
    data.tasks.push(newTask);
    writeData(data);
    res.send("Ok");
  } else {
    res.status(403).send({ error: "Failed parametres!!" });
  }
});

// Edit a task
app.put("/tasks/:id", (req, res) => {
  if (validateBody(req.body)) {
    const data = readData();
    const body = req.body;
    const id = parseInt(req.params.id);
    const taskIndex = data.tasks.findIndex((task) => task.id === id);
    data.tasks[taskIndex] = {
      ...data.tasks[taskIndex],
      ...body,
    };
    writeData(data);
    res.send("Ok");
  } else {
    res.status(403).send({ error: "Failed parametres!!" });
  }
});

// Delete a Task
app.delete("/tasks/:id", (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const taskIndex = data.tasks.findIndex((task) => task.id === id);
  if(taskIndex < 0){
    res.status(403).send({ error: "Invalid ID!!" });
  } else {
      data.tasks.splice(taskIndex, 1);
      writeData(data);
      res.send("Ok");
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
