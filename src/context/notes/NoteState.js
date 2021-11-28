// import react from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{

const notesinitial = [
    {
      "_id": "619c549d1ba46e403a8893bd",
      "user": "619b10fac043e4e0eae622c3",
      "title": "My Second Title  Updated",
      "description": "When you don't have a pencil YOu wrote with your pen updated ",
      "tag": "General updated",
      "date": "2021-11-23T02:40:29.604Z",
      "__v": 0
    },
    {
      "_id": "619c54a41ba46e403a8893c1",
      "user": "619b10fac043e4e0eae622c3",
      "title": "My345 Title",
      "description": "THIS is34 my first josn file",
      "tag": "persona34l",
      "date": "2021-11-23T02:40:36.934Z",
      "__v": 0
    },
    {
      "_id": "619c549d1ba46e403a8893bd",
      "user": "619b10fac043e4e0eae622c3",
      "title": "My Second Title  Updated",
      "description": "When you don't have a pencil YOu wrote with your pen updated ",
      "tag": "General updated",
      "date": "2021-11-23T02:40:29.604Z",
      "__v": 0
    },
    {
      "_id": "619c54a41ba46e403a8893c1",
      "user": "619b10fac043e4e0eae622c3",
      "title": "My345 Title",
      "description": "THIS is34 my first josn file",
      "tag": "persona34l",
      "date": "2021-11-23T02:40:36.934Z",
      "__v": 0
    },
    {
      "_id": "619c549d1ba46e403a8893bd",
      "user": "619b10fac043e4e0eae622c3",
      "title": "My Second Title  Updated",
      "description": "When you don't have a pencil YOu wrote with your pen updated ",
      "tag": "General updated",
      "date": "2021-11-23T02:40:29.604Z",
      "__v": 0
    },
    {
      "_id": "619c54a41ba46e403a8893c1",
      "user": "619b10fac043e4e0eae622c3",
      "title": "My345 Title",
      "description": "THIS is34 my first josn file",
      "tag": "persona34l",
      "date": "2021-11-23T02:40:36.934Z",
      "__v": 0
    },
    {
      "_id": "619c549d1ba46e403a8893bd",
      "user": "619b10fac043e4e0eae622c3",
      "title": "My Second Title  Updated",
      "description": "When you don't have a pencil YOu wrote with your pen updated ",
      "tag": "General updated",
      "date": "2021-11-23T02:40:29.604Z",
      "__v": 0
    },
    {
      "_id": "619c54a41ba46e403a8893c1",
      "user": "619b10fac043e4e0eae622c3",
      "title": "My345 Title",
      "description": "THIS is34 my first josn file",
      "tag": "persona34l",
      "date": "2021-11-23T02:40:36.934Z",
      "__v": 0
    },
    {
      "_id": "619c549d1ba46e403a8893bd",
      "user": "619b10fac043e4e0eae622c3",
      "title": "My Second Title  Updated",
      "description": "When you don't have a pencil YOu wrote with your pen updated ",
      "tag": "General updated",
      "date": "2021-11-23T02:40:29.604Z",
      "__v": 0
    },
    {
      "_id": "619c54a41ba46e403a8893c1",
      "user": "619b10fac043e4e0eae622c3",
      "title": "My345 Title",
      "description": "THIS is34 my first josn file",
      "tag": "persona34l",
      "date": "2021-11-23T02:40:36.934Z",
      "__v": 0
    },
    {
      "_id": "619c549d1ba46e403a8893bd",
      "user": "619b10fac043e4e0eae622c3",
      "title": "My Second Title  Updated",
      "description": "When you don't have a pencil YOu wrote with your pen updated ",
      "tag": "General updated",
      "date": "2021-11-23T02:40:29.604Z",
      "__v": 0
    },
    {
      "_id": "619c54a41ba46e403a8893c1",
      "user": "619b10fac043e4e0eae622c3",
      "title": "My345 Title",
      "description": "THIS is34 my first josn file",
      "tag": "persona34l",
      "date": "2021-11-23T02:40:36.934Z",
      "__v": 0
    },
    {
      "_id": "619c549d1ba46e403a8893bd",
      "user": "619b10fac043e4e0eae622c3",
      "title": "My Second Title  Updated",
      "description": "When you don't have a pencil YOu wrote with your pen updated ",
      "tag": "General updated",
      "date": "2021-11-23T02:40:29.604Z",
      "__v": 0
    },
    {
      "_id": "619c54a41ba46e403a8893c1",
      "user": "619b10fac043e4e0eae622c3",
      "title": "My345 Title",
      "description": "THIS is34 my first josn file",
      "tag": "persona34l",
      "date": "2021-11-23T02:40:36.934Z",
      "__v": 0
    },
    {
      "_id": "619c64c7b6af751a00765bf0",
      "user": "619b10fac043e4e0eae622c3",
      "title": "My Second Title",
      "description": "When you don't have a pencil YOu wrote with your pen",
      "tag": "General",
      "date": "2021-11-23T03:49:27.083Z",
      "__v": 0
    }
  ]

  const [notes, setnotes] = useState(notesinitial)


return (
    <NoteContext.Provider value={{notes, setnotes}}>
        {props.children}
    </NoteContext.Provider>
)

}

export default NoteState
