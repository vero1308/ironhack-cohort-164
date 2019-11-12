function protectAdminRoute(req, res, next) {
  const isAuthorized = true;
  if (isAuthorized) {
    res.locals.isAdmin = true;
    // we write in res.locals here (accessible everywhere in hbs templates)
    // logic before the next() call ...
    next(); // executes the next middleware in line OR the callback handling the request if this is the last middleware in line
  } else {
    res.locals.isAdmin = false;
    res.redirect("/signin");
  }
}

module.exports = protectAdminRoute;
