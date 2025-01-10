const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../utils/config");

const authController = {
  register: async (req, res) => {
    try {
      console.log(req.body);

      // get the user input
      const { username, email, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      // create a new user object
      const newUser = new User({ username, email, password: hashedPassword });

      // check if the user with same email exits
      const user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ error: "User already exists." });
      }

      //save the user
      await newUser.save();

      res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  login: async (req, res) => {
    try {
      console.log(req.body);

      // get the email, password from the req.body
      const { email, password } = req.body;

      // check if the user exits
      const user = await User.findOne({ email });

      if (!user) {
        res.status(400).json({ error: "User does not exist" });
      }

      //compare if the password is correct
      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
        res.status(400).json({ error: "Invalid credentials" });
      }

      //generate token
      const token = await jwt.sign({ id: user._id }, SECRET_KEY);

      //   console.log(token);

      res.status(200).json({ token, message: "User logged in successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getUserProfile: async (req, res) => {
    try {
      console.log(req.userId);

      //get the user id from the req object
      const userId = req.userId;

      const user = await User.findById(userId).select(
        "-password -created_At -updated_At -__v"
      );

      //send the user object
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = authController;
