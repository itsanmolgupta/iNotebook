import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => { 
    const notesInitial = [
        {
            "id": "1",
            "title": "Note 1",
            "description": "Note 1 description"
        },
        {
            "id": "2",
            "title": "Note 2",
            "description": "Note 2 description"
        },
        {
            "id": "3",
            "title": "Note 2",
            "description": "Note 2 description"
        },
        {
            "id": "4",
            "title": "Note 2",
            "description": "Note 2 description"
        },
        {
            "id": "5",
            "title": "Note 2",
            "description": "Note 2 description"
        },
        {
            "id": "6",
            "title": "Note 2",
            "description": "Note 2 description"
        },
        {
            "id": "7",
            "title": "Note 2",
            "description": "Note 2 description"
        }
    ]  
    const [notes, setNotes] = useState(notesInitial);

    // Add a Note
    const addNote=(title, description)=> {
        const note = {
            "id": "8",
            "title": title,
            "description": description
        };
        setNotes(notes.concat(note));
    }

    // Delete a Note
    const deleteNote=(id)=> {
        const newNotes = notes.filter((note) => { return note.id !== id; });
        setNotes(newNotes);
    }


    // Edit a Note
    const editNote=()=> {
    }


    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;