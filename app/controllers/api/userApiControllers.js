const { User } = require("../../databases/models");
const { comparePassword } = require("../../helpers/bcryptHelpers");

class UserAPIController {
  static async register(req, res) {
    try {
      const { email, password, role } = req.body;
      const user = await User.findOne({
        where: { email },
        rejectOnEmpty: false,
      });
      if (user) {
        res.status(400).json({
          name: "Bad Request",
          message: "Email Already exists.",
        });
      } else {
        const data = await User.create({ email, password, role });
        res.status(201).json(data);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user_exists = await User.findOne({
        where: { email },
        rejectOnEmpty: false,
      });
      if (!user_exists) {
        res.status(404).json({
          name: "Not Found",
          message: "Email not found.",
        });
      } else if (!comparePassword(password, user_exists.password)) {
        res.status(400).json({
          name: "Bad Request",
          message: "Password was Wrong.",
        });
      } else {
        const user = { email: user_exists.email, role: user_exists.role };
        res.status(201).json(user);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserAPIController;
