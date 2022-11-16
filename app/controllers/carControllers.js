class CarController {
  static async getHomepage(req, res) {
    res.render("index");
  }
}

module.exports = CarController;
