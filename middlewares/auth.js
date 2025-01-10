const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../utils/config");

const auth = {
  // Middleware to check if the user is authenticated
  verifiedLogin: async (req, res, next) => {
    //get the token from the request header
    const token = req.header("Authorization").substring(7);

    console.log(token);

    //if the token does not exist, return an error message
    if (!token) {
      return res.status(401).json({ message: "Access denied" });
    }

    //verify the token
    try {
      const verified = jwt.verify(token, SECRET_KEY);
      req.userId = verified.id;
    } catch (error) {
      return res.status(400).json({ message: "Unauthorized access." });
    }

    next();
  },
};

module.exports = auth;
