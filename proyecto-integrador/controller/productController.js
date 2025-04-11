

const controlador = {
  index: function (req, res) {
    return res.render("product");
  },
  search: function (req, res) {
    return res.render("search-results");
  },
  productAdd: function (req, res) {
    return res.render("product-add");
  },
};

module.exports = controlador;
