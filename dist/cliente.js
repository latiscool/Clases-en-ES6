"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  _createClass(Cliente, [{
    key: "getNombre",
    get: function get() {
      return this._nombre;
    }
  }, {
    key: "setSombre",
    set: function set(nombre) {
      this._nombre = nombre;
    }
  }, {
    key: "getImpuesto",
    get: function get() {
      return this._impuesto;
    }
  }, {
    key: "setImpuesto",
    set: function set(impuesto) {
      this._impuesto = impuesto;
    }
  }, {
    key: "formulaImpuesto",
    get: function get() {
      var formula = (this._impuesto.getmonto_bruto_anual - this._impuesto.getdeducciones) * 0.21;
      return formula;
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;