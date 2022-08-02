//Auch controllers

exports.register = (req, res) => {
  console.log(req.body);
  res.json("register user");
};
