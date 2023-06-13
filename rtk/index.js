const store=require('./app');
const fetchTodos=require('./features/todos/AsyncThunk')

store.dispatch(fetchTodos());