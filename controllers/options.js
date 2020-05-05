const db = require("../models");

// GET all options by decision e.g. /api/v1/options?decision=6542215664655
// or all options e.g. /api/v1/options
const get = (req, res) => {
  if (req.query.decision) {
    db.Option.find({ decision: req.query.decision })
      .sort("-updatedAt")
      .exec((err, options) => {
        if (err) {
          return res.status(400).json({
            status: 400,
            error: "Something went wrong, please try again.",
          });
        }
        res.json(options);
      });
  } else {
    db.Option.find({})
      .sort("-updatedAt")
      .exec((err, options) => {
        if (err) {
          return res.status(400).json({
            status: 400,
            error: "Something went wrong, please try again.",
          });
        }
        res.json(options);
      });
  }
};

const create = (req, res) => {
  db.Option.create(req.body, (err, newOption) => {
    if (err) {
      if (err.name == 'ValidationError') {
        return res.status(422).json(err);
      }
      return res.status(400).json({
        status: 400,
        error: "Something went wrong, please try again.",
      });
    }
    res.status(201).json(newOption);
  });
};

const show = (req, res) => {
  db.Option.findById(req.params.id)
		.populate("options")
		.populate("chosenOption")
    .exec((err, foundOption) => {
      if (err) {
        return res.status(400).json({
          status: 400,
          error: "Something went wrong, please try again.",
        });
      }
      res.json(foundOption);
    });
};

const update = (req, res) => {
  db.Option.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }, // returns updated document
    (err, updatedOption) => {
      if (err) {
        return res.status(400).json({
          status: 400,
          error: "Something went wrong, please try again.",
        });
      }
      res.json(updatedOption);
    }
  );
};

const remove = (req, res) => {
  db.Option.deleteOne({ _id: req.params.id }, (err, deletedOption) => {
    if (err) {
      return res.status(400).json({
        status: 400,
        error: "Something went wrong, please try again.",
      });
    }
    res.json(deletedOption);
  });
};

module.exports = {
  get,
  create,
  show,
  update,
  remove,
};
