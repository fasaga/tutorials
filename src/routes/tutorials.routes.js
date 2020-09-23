const express = require('express');
const router = express.Router();

const { 
    renderTutorialForm, 
    createNewTutorial, 
    renderTutorials, 
    renderEditForm, 
    updateTutorial, 
    deleteTutorial 
} =  require('../controllers/tutorials.controller');

// New tutorials
router.get('/tutorials/add', renderTutorialForm);

router.post('/tutorials/new-tutorial', createNewTutorial);

// Get All tutorials
router.get('/tutorials', renderTutorials);

// Edit tutorials
router.get('/tutorials/edit/:id', renderEditForm);

router.put('/tutorials/edit/:id', updateTutorial);

// Delete tutorial
router.delete('/tutorials/delete/:id', deleteTutorial);


module.exports = router;