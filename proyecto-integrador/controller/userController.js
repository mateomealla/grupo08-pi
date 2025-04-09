
const controladorUser = {
    login: function (req, res) {
      return res.render("login");
    },
    profile: function (req, res) {
        return res.render("profile");
      }
  };
  
  module.exports = controladorUser;