import {v4 as uuidv4} from 'uuid';
const initialState={tasks:[{id:uuidv4(), description:'Read a book',isDone:false},{id:uuidv4(), description:'Finish homework',isDone:false}]}
const reducer = (state=initialState, {type,payload}) => {
    switch (type) {
        case 'add':
            return ({tasks:[{id:uuidv4(),description:payload,isDone:false},...state.tasks]});
        case "delete" :
             return({tasks:[...state.tasks].filter(task=>task.id !== payload)});
        case "edit" : 
             return({tasks:[...state.tasks].map(task=>task.id===payload.id ?{...task,description:payload.newDesc}: task )})
        case "done" : 
             return({tasks:[...state.tasks].map(task=>task.id===payload ? {...task,isDone :!task.isDone} : task )});
        default:
            return (state);
    }
}
export default reducer;