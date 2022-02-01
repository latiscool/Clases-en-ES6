"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var taxes = new _impuesto["default"](3500, 100);
var client = new _cliente["default"]('Luis', taxes); // console.log(taxes);
// console.log(client);
// console.log(client.formulaImpuesto);

console.log(" El impuesto a pagar por ".concat(client.getNombre, " es de un total de $ ").concat(client.formulaImpuesto, ".-"));