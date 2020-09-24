const { Router } = require('express')
const router = Router();

const { 
    renderTutorialForm, 
    createNewTutorial, 
    renderTutorials, 
    renderEditForm, 
    updateTutorial, 
    deleteTutorial 
} =  require('../controllers/tutorials.controller');

const {isAuthenticated} = require ('../helpers/auth')

// New tutorials
router.get('/tutorials/add', isAuthenticated, renderTutorialForm);

router.post('/tutorials/new-tutorials', isAuthenticated, createNewTutorial);

// Get All tutorials
router.get('/tutorials', isAuthenticated, renderTutorials);

// Edit tutorials
router.get('/tutorials/edit/:id', isAuthenticated, renderEditForm);

router.put('/tutorials/edit/:id', isAuthenticated, updateTutorial);

// Delete tutorial
router.delete('/tutorials/delete/:id', isAuthenticated, deleteTutorial);


module.exports = router;