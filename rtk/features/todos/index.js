const {createSlice}=require('@reduxjs/toolkit');
const fetchTodos=require('./AsyncThunk')

const initialState={
    loading:false,
    posts:[],
    error:""
}

const todosSlice=createSlice({
    name:'todos',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending,(state,action)=>{
            state.loading=true;
            state.posts=[];
            state.error=""
        });
        builder.addCase(fetchTodos.fulfilled,(state,action)=>{
            state.loading=false;
            state.posts=action.payload;
            state.error=""
        });
        builder.addCase(fetchTodos.rejected,(state,action)=>{
            state.loading=false;
            state.posts=[];
            state.error=action.error.message
        })
    }
})

module.exports=todosSlice.reducer