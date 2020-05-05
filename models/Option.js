const mongoose = require("mongoose");

const OptionSchema = mongoose.Schema(
  {
    decision: { type: "ObjectId", ref: "Decision" },
		title: { type: String, required: true },
		body: String,
  },
  { timestamps: true }
);

const Option = mongoose.model("Option", OptionSchema);

module.exports = Option;
