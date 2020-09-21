const tutorialsCtrl = {};

tutorialsCtrl.renderTutorialForm = (req, res) => {
    res.render('tutorials/new-tutorial');
};

tutorialsCtrl.createNewTutorial = (req, res) => {
    console.log(req.body)
    res.send('new tutorial');
};

tutorialsCtrl.renderTutorials = (req, res) => {
    res.send('render tutorial');
};

tutorialsCtrl.renderEditForm = (req, res) => {
    res.send('render edit form');
};

tutorialsCtrl.renderEditForm = (req, res) => {
    res.send('render edit form');
};

tutorialsCtrl.updateTutorial = (req, res) => {
    res.send('update tutorial');
};

tutorialsCtrl.deleteTutorial = (req, res) => {
    res.send('deleting tutorial');
};

module.exports = tutorialsCtrl;