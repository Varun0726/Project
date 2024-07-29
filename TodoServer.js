const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

var Todos = [];
var counter = 1;

app.get("/todos",(req,res)=>{
    res.json({
    todos: Todos
})
})

app.get("/todos/:id",(req,res)=>{
    const todosid = req.params.id;
    if (!(todosid <= Todos.length)){
        res.json({message:"Sorry the following todo doesnt exist!!"})
    }
    Todos.filter((x)=>{
        if (x.todoid == todosid){
        res.json({
            x
        })}})})

app.post("/todos",(req,res) => {
    const todoid = counter++;
    const todoTitle = req.body.title;
    const todoDescription = req.body.description;
    const todoStatus = false;
    const todo = {todoid,todoTitle,todoDescription,todoStatus};
    Todos.push(todo)
    res.json({
        message:"todo added successfully"
    })

})

// app.put("/todos/:id",(req,res) => {
//     const todoid = req.params.id;
//     Todos.filter((x)=>{
//         if(x.id == todoid){
//             return false;
//         }
//         return true
//     })
//     const todoTitle = req.body.title;
//     const todoDescription = req.body.description;
//     const todoStatus = false;
//     const todo = {todoid,todoTitle,todoDescription,todoStatus};
//     Todos.push(todo);
//     res.json({
//         message:"Todo got updated."
//     })
// })
app.put("/todos/:id",(req,res) => {
    const todoid = req.params.id;
    if (!(todoid <= Todos.length)){
        res.json({message:"Sorry the following todo doesnt exist!!"})
    }
    Todos.filter((x)=> {
        if (todoid == x.todoid){
            x.todoStatus = true;
            res.json({
                x
            })
        }
    })
})
app.delete("/todos/:id",(req,res) => {
    const todoid = req.params.id;
    if (!(todoid <= Todos.length)){
        res.json({message:"Sorry the following todo doesnt exist!!"})
    };
    Todos = Todos.filter((x)=>{
        if (!(todoid == x.todoid)){
            return true;
        }
    })
    res.json({
        Message:"Todo deleted successfully"
    })
})

app.listen(port,()=>{
    console.log(`welcome to the Server ${port}`);
})
