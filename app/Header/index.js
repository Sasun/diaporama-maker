var m = require("mithril");
var boundToStyle = require("../core/boundToStyle");

function Header () {

}
Header.render = function (model) {
  return m("header", { style: boundToStyle(model.bound) }, [
    m("h1", "Diaporama Maker")
  ]);
};

module.exports = Header;