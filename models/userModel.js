const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require,
  },
  email: {
    type: String,
    require,
  },
  password: {
    type: String,
    require,
  },
  isAdmin: {
    type: Boolean,
    require: true,
    default: false,
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User;
