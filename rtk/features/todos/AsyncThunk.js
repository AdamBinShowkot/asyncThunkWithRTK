const {createAsyncThunk}=require('@reduxjs/toolkit');
const fetch=require('node-fetch')

const fetchTodos=createAsyncThunk(
    'todo/fetchTodos',
    async()=>{
        const response=await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

        const todos=await response.json();

        return todos
    }
)

module.exports=fetchTodos