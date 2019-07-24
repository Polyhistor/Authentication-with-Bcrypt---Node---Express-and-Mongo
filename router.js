const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");

// since we are doing tokens, we don't need passport automatic sessions, hence is the session:false
const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.get("/", requireAuth, function(req, res) {
    res.send({ hi: "there" });
  });
  app.post("/signin", requireSignin, Authentication.signup);
  app.post("/signup", Authentication.signup);
};
