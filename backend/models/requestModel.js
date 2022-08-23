const mongoose = require("mongoose");
const schema = mongoose.Schema;

const requestSchema = new schema({
  tool: {
    type: String,
    required: true,
  },
  number_required: {
    type: Number,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  number: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("RequestModel", requestSchema);
