const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  user_type: {
    type: String,
    enum: ["Farmer", "Service Man"],
    default: "Farmer",
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
