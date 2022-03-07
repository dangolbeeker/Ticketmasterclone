const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const User = require("../models/user");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError("Fetching users failed", 500);
    return next(error);
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const { phone, email, password } = req.body;

  if (await isUserExisting(phone)) {
    const error = new HttpError(
      "User exists already, please login instead.",
      422
    );
    return next(error);
  }

  const createdUser = new User({
    phone,
    phone,
    password,
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Signing up failed, please try again.", 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { phone, password } = req.body;

  let existingUser = await isUserExisting(phone);

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError("Invalid credentials, could not login.", 401);
    return next(error);
  }

  res.json({ message: "Logged in!" });
};

const isUserExisting = async (phone) => {
  try {
    return await User.findOne({ phone: phone });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;