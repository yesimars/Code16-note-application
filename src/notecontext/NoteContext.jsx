import { createContext, useReducer } from "react";
import { initial, noteReducer } from "../components/note";



const NoteContext=createContext()

function NoteCotextProvider({children})
{
    const [notes, noteDispatch]=useReducer(noteReducer, initial)

    const context={
        notes:{state:notes,dispatch:noteDispatch}
    }

    return <NoteContext.Provider value={context}>
        {children}
    </NoteContext.Provider>
}

export {NoteContext, NoteCotextProvider}