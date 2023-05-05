//check if user is authenticated (logged in)
const authCheck = (req, res, next) => {
    const mode = process.argv.slice(3,4).toString().trim();
    if (mode === "authoff"){
        req.session.loggedIn = true;
        // req.session.userId = 2;
        // req.session.hello = true;

    }
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = authCheck;