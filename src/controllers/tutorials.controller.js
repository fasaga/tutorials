const tutorialsCtrl = {};

// Models
const Tutorial = require("../models/Tutorial");

tutorialsCtrl.renderTutorialForm = (req, res) => {
  res.render("tutorials/new-tutorial");
};

tutorialsCtrl.createNewTutorial = async (req, res) => {
  const { title, description } = req.body;
  const newTutorial = new Tutorial({title, description});
  newTutorial.user = req.user.id;
  await newTutorial.save();
  req.flash('success_msg', 'Tutorial Added Succesfully');
  res.redirect('/tutorials')

};

tutorialsCtrl.renderTutorials = async (req, res) => {
  const tutorials = await Tutorial.find({ user: req.user.id }).sort({createdAt: 'desc' }).lean();
  res.render("tutorials/all-tutorials", { tutorials });
};

tutorialsCtrl.renderEditForm = async (req, res) => {
  const tutorial = await Tutorial.findById(req.params.id).lean();
  if (tutorial.user != req.user.id) {
    req.flash('error_msg', 'Not Authorized.');
    return res.redirect('/tutorials');
  }
  res.render("tutorials/edit-tutorial", { tutorial });
};

tutorialsCtrl.updateTutorial = async (req, res) => {
  const { title, description } = req.body;
  await Tutorial.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Tutorial Updated Successfully");
  res.redirect("/tutorials");
};

tutorialsCtrl.deleteTutorial = async (req, res) => {
  await Tutorial.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Tutorial Deleted Successfully");
  res.redirect("/tutorials");
};

module.exports = tutorialsCtrl;