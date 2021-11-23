const express = require('express')
const router = express.Router()
const Note = require('../modules/Note')
const fetchUser = require('../Middleware/fetchUser');
const { body, validationResult } = require('express-validator');
const { json } = require('express');

// ROUTES 1 :- Get All the Notes Using : GET "/api/notes/fetchallnotes" . Login Required 

router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)

    } catch (error) {
        console.error(error.message);
        res.status(500).send(" 16 Internal Server ERROR")
    }
})

// ROUTES 2 :- Add a New Notes using: POST "/api/notes/addnotes" . Login Required 

router.post('/addnotes', fetchUser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        try {
            const { title, description, tag } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()

            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })


// ROUTES 3 :- Update an existing Notes using: PUT "/api/notes/updatenote" . Login Required 

router.put('/updatenote/:id', fetchUser, async (req, res) => {
    const { title, description, tag } = req.body;

    // create a new node Object

    const newNote = {};
    if (title) { newNote.title = title };
    if (description) { newNote.description = description };
    if (tag) { newNote.tag = tag };


    // Find the note to be Updated and update it

    let note = await Note.findById(req.params.id);
    if (!note) { return res.status(404).send("Not Found") }

    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })

    res.json({ note });

})







module.exports = router