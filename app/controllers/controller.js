exports.home = (req, res) => {
  const data = {
    title: "Hiep Do - enjoy your life",
    err: false
  }
  res.render('../views/index', { data: data });
  // res.send("hello");
};
exports.red = (req, res) => {
  res.redirect("/admin/signup");
};

exports.signup = (req, res) => {
  const data = {
    title: "admin",
    err: false
  }
  res.render('admin/signup', { data: data });
};