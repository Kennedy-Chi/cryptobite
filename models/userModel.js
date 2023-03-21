const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Please fill in your username"],
    minlength: [2, "Username must be greater than 3 characters"],
    unique: [true, "A user with this username already exist"],
    trim: true,
  },

  firstName: {
    type: String,
    require: [true, "Please fill in your first name"],
    minlength: [2, "Username must be greater than 5 characters"],
    trim: true,
  },

  middleName: {
    type: String,
    require: [true, "Please fill in your middle name"],
    minlength: [2, "Username must be greater than 5 characters"],
    trim: true,
  },

  lastName: {
    type: String,
    require: [true, "Please fill in your last name"],
    minlength: [2, "Username must be greater than 5 characters"],
    trim: true,
  },

  profilePicture: String,
  identity: String,
  idPicture: String,

  dob: Number,

  income: String,
  maritalStatus: String,
  gender: String,
  position: String,

  residentAddress1: String,
  residentAddress2: String,
  residentDistrict: String,
  residentState: String,
  residentZipCode: String,
  residentCountry: String,

  originAddress1: String,
  originAddress2: String,
  originDistrict: String,
  originState: String,
  originZipCode: String,
  originCountry: String,

  phoneNumber1: {
    type: String,
    // required: [true, "Please fill in your phone number"],
    // unique: [true, "A user with this phone number already exist"],
    // minlength: [10, "Phone number must be at least 10 digits"],
    // trim: true,
  },

  phoneNumber2: String,

  email: {
    type: String,
    required: [true, "Please fill in your email"],
    unique: [true, "A user with this email already exist"],
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },

  autoRegister: {
    type: Boolean,
    default: true,
  },

  hasInvested: {
    type: Boolean,
    default: false,
  },

  lastInvest: {
    type: Date,
  },

  accounts: Array,
  pin: Number,
  kinFullName: String,
  kinRelationship: String,
  kinAddress: String,
  kinEmail: String,
  kinPhoneNumber: String,

  totalBalance: {
    type: Number,
    default: 0,
  },

  status: {
    type: String,
    enum: ["Staff", "User"],
    default: "User",
  },

  staffType: {
    type: String,
    default: "User",
  },

  reviewStatus: {
    type: Boolean,
    default: false,
  },

  rating: {
    type: Number,
    default: 3.0,
  },

  review: {
    type: String,
    default: "",
  },

  password: {
    type: String,
    required: [true, "Please fill in your password"],
    minlenght: [4, "Password must be at least 4 characters long"],
    select: false,
  },

  cPassword: {
    type: String,
    required: [true, "Please confirm the password"],
    validate: {
      //This only works on save
      validator: function (el) {
        return el == this.password;
      },
      message: "Sorry the passwords do not match",
    },
  },

  activePlans: Array,

  regDate: { type: Date, default: new Date().getTime() },
  image: { type: String },
  identity: { type: String },
  referrals: Array,
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,

  suspension: {
    type: Boolean,
    default: false,
  },

  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.cPassword = undefined;
  next();
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = this.passwordChangedAt.getTime() / 1000;
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
