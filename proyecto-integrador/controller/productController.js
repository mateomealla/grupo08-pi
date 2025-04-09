

const controlador = {
  index: function (req, res) {
    return res.render("product");
  },
  search: function (req, res) {
    return res.render("search-results");
  }
};

module.exports = controlador;
