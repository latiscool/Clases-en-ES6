import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

let taxes = new Impuesto(3500, 100);
let client = new Cliente('Luis', taxes);

// console.log(taxes);
// console.log(client);

// console.log(client.formulaImpuesto);

console.log(
  ` El impuesto a pagar por ${client.getNombre} es de un total de $ ${client.formulaImpuesto}.-`
);
