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
		select: false,
  },
}, {timestamps: true});

UserSchema.pre('deleteOne', function(doc) {
	console.log('pre delete hook activated');
	console.log(doc._id);
})

const User = mongoose.model("User", UserSchema);

module.exports = User;
