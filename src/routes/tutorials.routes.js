const { Router } = require('express');
const router = Router();

const { 
    renderTutorialForm, 
    createNewTutorial, 
    renderTutorials, 
    renderEditForm, 
    updateTutorial, 
    deleteTutorial 
} =  require('../controllers/tutorials.controller');

// New notes
router.get('/tutorials/add', renderTutorialForm);

router.post('/tutorials/new-tutorial', createNewTutorial);

// Get All Note
router.get('/tutorials', renderTutorials);

// Edit notes
router.get('/tutorials/edit/:id', renderEditForm);

router.put('/tutorials/edit/:id', updateTutorial);

// Delete note
router.delete('/tutorials/delete/:id', deleteTutorial);


module.exports = router;