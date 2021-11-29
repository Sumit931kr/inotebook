// import react from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
const host = "http://localhost:5000"
  const notesinitial = []

  const [notes, setnotes] = useState(notesinitial)



 //////////////// // Get ALL Notes  ////////////////

  const getNotes = async () => {

// APi CAll to GEt ALl the Notes

  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET', 
    headers: {
      // 'Content-Type': 'application/json',
      "auth-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5YjEwZmFjMDQzZTRlMGVhZTYyMmMzIn0sImlhdCI6MTYzNzU4ODYwNX0.R9H2bN9NAx7WhYv8HCKV9rhTRbTcszdOHBqbiULX5YE'
    },

  });
const json = await response.json();
console.log(json);
setnotes(json)

  }


 //////////////// // ADD a Note  ////////////////

  const addnote = async (title, description, tag) => {

// APi CAll to Addinga Note

  const response = await fetch(`${host}/api/notes/addnotes`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      "auth-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5YjEwZmFjMDQzZTRlMGVhZTYyMmMzIn0sImlhdCI6MTYzNzU4ODYwNX0.R9H2bN9NAx7WhYv8HCKV9rhTRbTcszdOHBqbiULX5YE'
    },
 
    body: JSON.stringify(title, description, tag)
  });

// const json = response.json();

  const note = {
      "_id": "3419c64c7b6af751a007653bf0",
      "user": "619b10fac043e4e0eae622c3",
      "title": title,
      "description": description,
      "tag": "General",
      "date": "2021-11-23T03:49:27.083Z",
      "__v": 0
    }
    setnotes(notes.concat(note))
  }


 //////////////// // Delete a Note  ////////////////


  const deletenote = (id) => {
    const newNotes = notes.filter((note) => { return note._id !== id })
    setnotes(newNotes)
  }


 //////////////// // Edit a Note  ////////////////

  const editnote = async (id, title, description, tag) => {

    // APi Call to Edit a Note

  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      "auth-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5YjEwZmFjMDQzZTRlMGVhZTYyMmMzIn0sImlhdCI6MTYzNzU4ODYwNX0.R9H2bN9NAx7WhYv8HCKV9rhTRbTcszdOHBqbiULX5YE'
    },
 
    body: JSON.stringify(title, description, tag)
  });

// const json = response.json();

  // Logic to Edit in Client

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }

  }


  return (
    <NoteContext.Provider value={{ notes, addnote, deletenote, editnote ,getNotes}}>
      {props.children}
    </NoteContext.Provider>
  )

}

export default NoteState
