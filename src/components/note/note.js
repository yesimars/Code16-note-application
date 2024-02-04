import { ADD_NOTE, REMOVE_NOTE, EDIT_NOTE } from "./actionType"
import { v4 as uuidv4 } from 'uuid';


export const initial={
    notes:[],
    note:''
}

export const noteReducer=(state,action)=>{
    switch(action.type){
        case ADD_NOTE:
            return {...state, notes:[...state.notes,
                {id:uuidv4(),title:action.payload}]}
        case REMOVE_NOTE:
            const filteredNotes=state.notes.filter(item=>item.id!=action.payload)
            return {...state,notes:filteredNotes}
        case EDIT_NOTE:
            const editdNotes = state.notes.map((note) =>
            note.id===action.payload.id? {...note, ...action.payload.editdNotes}:note)
            console.log(editdNotes);
            return {...state,notes:editdNotes}
            
        default:
            console.log("Default state...");
            return state
    }
}