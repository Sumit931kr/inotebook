import React, { useContext,useState } from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(noteContext);
    const { addnote } = context;

    const [note, setnote] = useState({ title: "", description: "", tag: "default" })

    const handleonClick = (e) => {
        e.preventDefault();
        addnote(note.title, note.description, note.tag);
    }
    const onchange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }


    return (
        <div>
            <div className="container">
                <h1>Add a Note</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label my-3">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp"  onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" onChange={onchange} id="description" name="description" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleonClick}>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default AddNote
