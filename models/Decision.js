const mongoose = require("mongoose");

const DecisionSchema = mongoose.Schema(
  {
    author: { type: "ObjectId", ref: "User" },
    title: { type: String, required: true },
    dueDate: Date,
    options: [{ type: "ObjectId", ref: "Option" }],
    chosenOption: { type: "ObjectId", ref: "Option" },
  },
  { timestamps: true }
);

const Decision = mongoose.model("Decision", DecisionSchema);

module.exports = Decision;
