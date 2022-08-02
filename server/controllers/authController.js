//Auch controllers
const User = require("../modals/userModal");

const { comparePassword, hashPassword } = require("../utils/auth");

// API for user Registation
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //validation
    if (!name) return res.status(400).send("Name is required");
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("Password is required & should be min 6 character long");
    }

    let userExist = await User.findOne({ email }).exec();
    if (userExist)
      return res.status(400).send("User already exists from this email");

    //hash Password
    const hashedPassWord = await hashPassword(password);

    //register
    const user = await User.create({
      name,
      email,
      password: hashedPassWord,
    });
    // console.log("user saved ", user);
    return res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).send("Error Please Try again");
  }
};
