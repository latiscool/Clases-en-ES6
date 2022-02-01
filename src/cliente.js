export default class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }
  get getNombre() {
    return this._nombre;
  }
  set setSombre(nombre) {
    this._nombre = nombre;
  }
  get getImpuesto() {
    return this._impuesto;
  }
  set setImpuesto(impuesto) {
    this._impuesto = impuesto;
  }

  get formulaImpuesto() {
    let formula =
      (this._impuesto.getmonto_bruto_anual - this._impuesto.getdeducciones) *
      0.21;
    return formula;
  }
}
