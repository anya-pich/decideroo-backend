const db = require("../models");

const show = (req, res) => {
  db.User.findById(req.params.id)
    .populate("decisions")
    .exec((err, foundUser) => {
      if (err) {
        return res.status(400).json({
          status: 400,
          error: "Something went wrong, please try again.",
        });
      }
      res.json(foundUser);
    });
};

const update = (req, res) => {
  db.User.findById(req.params.id)
    .select("+email")
    .exec((err, foundUser) => {
      if(err) {
        return res.status(400).json({
          status: 400,
          error: "Error finding user",
        })
      }
      foundUser.set(req.body);
      foundUser.save((saveErr, updatedUser) => {
        if(saveErr) {
          return res.status(400).json({
            status: 400,
            error: "Error saving updated user"
          })
        }
        res.json(updatedUser);
      })
  })
};

const index = (req, res) => {
  db.User.find({}, (err, users) => {
    if (err)
      return res.status(500).json({
        status: 500,
        message: err,
      });

    res.json(users);
  });
};

const remove = (req, res) => {
  db.User.deleteOne(
    {_id: req.params.id},
    (err, deletedUser) => {
      if (err) {
        return res.status(400).json({
          status: 400,
          error: 'Something went wrong, please try again.'
        });
      }
      res.json(deletedUser);
    }
  )
};

module.exports = {
  show,
  update,
  index,
  remove,
};
