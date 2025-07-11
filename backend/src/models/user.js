const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validator(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email address:" + value);
        }
      },
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 18,
      max: 65,
    },
    gender: {
      type: String,
      validate(value) {
        // only validate for new user not existing user
        if (!["Male", "Female", "Others"].includes(value)) {
          throw new Error();
        }
      },
    },
    photoUrl: {
      type: String,
      default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNr2tV6uuvmORZKBUeu2Oxf9iH-wdYouxVw&s"
    },

    about: {
      type: String,
      default: "This is default about ",
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true }
);

userSchema.index({firstName:1, lastName:1})  // indexes is db for fast manipulating data
userSchema.methods.getJWT = async function () {
  const user = this; //  refer that perticuler instance and work with only old function not arrow function
  const token = await jwt.sign({ _id: user._id }, "DEV@Tinder123", {
    expiresIn: "1d",
  });

  return token;
};

userSchema.methods.validatePassword = async function(passwordInputByUser){
  const user = this;
  const passwordHash = user.password

  const isPasswordValid = await bcrypt.compare(passwordInputByUser , passwordHash);
  return isPasswordValid
}
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
