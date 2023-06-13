const {configureStore, getDefaultMiddleware}=require('@reduxjs/toolkit');
const {createLogger}=require('redux-logger')
const todosSlice=require('../features/todos');

const logger=createLogger();

const store=configureStore({
    reducer:{
        todos:todosSlice
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(logger)
    }
})

module.exports=store;