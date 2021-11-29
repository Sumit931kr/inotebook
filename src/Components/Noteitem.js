import React , {useContext} from 'react'

import noteContext from '../context/notes/noteContext';


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deletenote } = context;
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3" >
                <div className="card-body">
                    <div className="d-flex align-items-center">
                    <h5 className="card-title">  {note.title}</h5> 
                    <i className="fas fa-trash-alt mx-2 float-end my-2" onClick={()=>{deletenote(note._id)}}></i>
                    <i className="fas fa-edit mx-2 my-2 float-end"></i>
                    </div>
                    <p className="card-text">   {note.description} </p>
                  
                </div>
            </div>
        </div>
    )
}

export default Noteitem
