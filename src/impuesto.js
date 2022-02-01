export default class Impuesto {
  constructor(monto_bruto_anual, deducciones) {
    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }
  get getmonto_bruto_anual() {
    return this._monto_bruto_anual;
  }
  set setmonto_bruto_anual(monto_bruto_anual) {
    this._monto_bruto_anual = monto_bruto_anual;
  }
  get getdeducciones() {
    return this._deducciones;
  }
  set setdeducciones(deducciones) {
    this._deducciones = deducciones;
  }
}
