import React, {useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export default function About() {

    const a = useContext(noteContext)


  a.Update();


    return (
        <div>
          This is About {a.state.name} And he is in {a.state.class}
        </div>
    )
}
