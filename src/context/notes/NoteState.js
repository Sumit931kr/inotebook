// import react from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
const S1 = {
    "name" : "Sumit Kumar",
    "class" : "8"

}
const [state, setstate] = useState(S1)
const Update = () => {
    setTimeout(() => {
        setstate ({
            "name" : "Amit Kumar",
            "class" : "10F"
        })
    }, 4000);
}

return (
    <NoteContext.Provider value={{state, Update}}>
        {props.children}
    </NoteContext.Provider>
)

}

export default NoteState
