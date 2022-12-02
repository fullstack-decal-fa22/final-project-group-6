var express = require("express");
// const bcrypt = require("bcryptjs");
const Note = require("../models/Note");
// const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
var router = express.Router();

router.route("/view")
  .get(auth, async (req, res) => {
    try {
      const { title, content, userId } = req.body;
      const notes = Note.find({ userId: userId });
      res.json(notes);
    } catch (err) {
      res.send({ message: "Error in fetching notes" });
    }
    // res.json({ message: 'Return all notes.' });
  });

  
router.route("/create")
  .post(auth, async(req, res) => {
    try {
      const {title, content, createdAt } = req.body;
      const newNote = new Note({
        title,
        content,
        createdAt,
        userId: req.user.id,
      });
      await newNote.save();
      res.send({ message: "Created a new note" });
    } catch (err) {
      res.send({ message: "Error in fetching notes" });
    }
  });

/* GET notes listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
