import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: "./.env" });
const port = process.env.PORT || 3000;

app.use(express.json());

const todos = [];
let id = 1;

app.get("/", (request, response) => {
  response.status(200).send(todos);
});

app.post("/", (request, response) => {
  const { title } = request.body;
  const todo = { _id: id++, title };

  todos.push(todo);

  response.status(201).send(todo);
});

app.put("/:id", (request, response) => {
  const {paramsId} = parseInt(request.params)
  const {title} = request.body
  const targetTodo = todos.find(todo => todo.id === paramsId )
  if(targetTodo){
    targetTodo.title = title
    response.status(202).send(targetTodo)
  }else{
    response.status(404).send('Item not found')
  }

})

app.listen(port, () => console.log("Server running on port ", port));
