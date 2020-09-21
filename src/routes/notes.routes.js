const { Router } = require('express');
const router = Router();

const { 
    renderNoteForm, 
    createNewNote, 
    renderNotes, 
    renderEditForm, 
    updateNote, 
    deleteNote 
} =  require('../controllers/notes.controller');

// New notes
router.get('/tutorials/add', renderNoteForm);

router.post('/tutorials/new-tutorial', createNewNote);

// Get All Note
router.get('/tutorials', renderNotes);

// Edit notes
router.get('/tutorials/edit/:id', renderEditForm);

router.put('/tutorials/edit/:id', updateNote);

// Delete note
router.delete('/tutorials/delete/:id', deleteNote);


module.exports = router;