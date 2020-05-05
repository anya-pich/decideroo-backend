const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  decisions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Decision"
  }],
  password: {
    type: String,
    required: [true, "Password is required"],
  },
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = User;
