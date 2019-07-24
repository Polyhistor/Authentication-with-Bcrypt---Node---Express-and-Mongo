const passport = require("passport");
const user = require("../models/user");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

// Create local strategy
const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, function(
  email,
  password,
  done
) {
  // verify this username and password, call done with the user if it's the corret user name and passwrd
  // otherwise , call doen with false
  user.findOne({ email: email }, function(err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false);
    }

    // compare passwords
    user.comparePassword(password, function(err, isMatch) {
      if (err) {
        return done(err);
      }
      if (!isMatch) {
        return done(null, false);
      }

      return done(null, user);
    });
  });
});

// Setup options fot JWT strategy
const jwtOptions = {
  // telling passport where to look for jwt
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  // use our secret to decode our token
  secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // see if the user id in the payload exists in our database, if it does, call "done" with that user
  // otherwise, call done without a user object

  user.findById(payload.sub, function(err, user) {
    // the case which the search failed so we print the error alongside false, meaning we did not find the user
    if (err) {
      return done(err, false);
    }

    // if we find the user, we return it
    if (user) {
      done(null, user);
    }

    // there are no errors, but haven't found the user too!
    else {
      done(null, false);
    }
  });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
