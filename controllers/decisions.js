const db = require("../models");

// GET all posts by author e.g. /api/v1/decisions?u=6542215664655
// or all posts e.g. /api/v1/decisions
const get = (req, res) => {
  if (req.query.author) {
    db.Decision.find({ author: req.query.u })
      .sort("-updatedAt")
      .exec((err, decisions) => {
        if (err) {
          return res.status(400).json({
            status: 400,
            error: "Something went wrong, please try again.",
          });
        }
        res.json(decisions);
      });
  } else {
    db.Decision.find({})
      .sort("-updatedAt")
      .exec((err, Decisions) => {
        if (err) {
          return res.status(400).json({
            status: 400,
            error: "Something went wrong, please try again.",
          });
        }
        res.json(Decisions);
      });
  }
};

const create = (req, res) => {
  db.Decision.create(req.body, (err, newDecision) => {
    if (err) {
      if (err.name == 'ValidationError') {
        return res.status(422).json(err);
      }
      return res.status(400).json({
        status: 400,
        error: "Something went wrong, please try again.",
      });
    }
    res.status(201).json(newDecision);
  });
};

const show = (req, res) => {
  db.Decision.findById(req.params.id)
		.populate("options")
		.populate("chosenOption")
    .exec((err, foundDecision) => {
      if (err) {
        return res.status(400).json({
          status: 400,
          error: "Something went wrong, please try again.",
        });
      }
      res.json(foundDecision);
    });
};

const update = (req, res) => {
  db.Decision.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }, // returns updated document
    (err, updatedDecision) => {
      if (err) {
        return res.status(400).json({
          status: 400,
          error: "Something went wrong, please try again.",
        });
      }
      res.json(updatedDecision);
    }
  );
};

const remove = (req, res) => {
  db.Decision.deleteOne({ _id: req.params.id }, (err, deletedDecision) => {
    if (err) {
      return res.status(400).json({
        status: 400,
        error: "Something went wrong, please try again.",
      });
    }
    res.json(deletedDecision);
  });
};

module.exports = {
  get,
  create,
  show,
  update,
  remove,
};
