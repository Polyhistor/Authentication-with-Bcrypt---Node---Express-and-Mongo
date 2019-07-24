const user = require("../models/user");

exports.signup = function(req, res, next) {
  // taking the body of the request
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "you must provide email and password" });
  }

  // first checking if the user with the giver email exists
  user.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    // if user with the mail doest exist
    if (existingUser) {
      return res.status(422).send({ error: "email is in use" });
    }

    // if a user with the mail des not exist, we create a new one :)
    const newUser = new user({
      email: email,
      password: password
    });
    // save the record to the database once you create the entity
    newUser.save(function(err) {
      if (err) {
        return next(err);
      }
    });
    // respond to request indicating the user was created
    res.json({ success: true });
  });
};
