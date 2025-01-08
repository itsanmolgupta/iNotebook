import React, {useState, useContext} from "react";
import NoteContext from '../context/notes/NoteContext'

const AddNote = () => {
    const context = useContext(NoteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title:"",description:""});
    const handleAddNote = (e) => {
        e.preventDefault();
        addNote(note.title, note.description);
    }
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Enter Your Note Title"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          rows="3"
          onChange={onChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleAddNote}>
        Add Note
      </button>
    </div>
  );
};

export default AddNote;
