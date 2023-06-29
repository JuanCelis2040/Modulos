let cantidad = parseInt(prompt())

let cantidadBilletes100000 = 0
let cantidadBilletes50000 = 0
let cantidadBilletes20000 = 0
let cantidadBilletes10000 = 0
let cantidadBilletes5000 = 0
let cantidadBilletes2000 = 0
let cantidadBilletes1000 = 0
let cantidadMonedas500 = 0
let cantidadMonedas200 = 0
let cantidadMonedas100 = 0
let cantidadMonedas50 = 0


if (Math.floor(cantidad / 100000) >= 1) {
  cantidadBilletes100000 = Math.floor(cantidad / 100000);
  cantidad = cantidad % 100000
}

if (Math.floor(cantidad / 50000) >= 1) {
  cantidadBilletes50000 = Math.floor(cantidad / 50000);
  cantidad = cantidad % 50000
}
if (Math.floor(cantidad / 20000) >= 1) {
  cantidadBilletes20000 = Math.floor(cantidad / 20000);
  cantidad = cantidad % 20000
}
if (Math.floor(cantidad / 10000) >= 1) {
  cantidadBilletes10000 = Math.floor(cantidad / 10000);
  cantidad = cantidad % 10000
}
if (Math.floor(cantidad / 5000) >= 1) {
  cantidadBilletes5000 = Math.floor(cantidad / 5000);
  cantidad = cantidad % 5000
}
if (Math.floor(cantidad / 2000) >= 1) {
  cantidadBilletes2000 = Math.floor(cantidad / 2000);
  cantidad = cantidad % 2000
}
if (Math.floor(cantidad / 1000) >= 1) {
  cantidadBilletes1000 = Math.floor(cantidad / 1000);
  cantidad = cantidad % 1000
}
if (Math.floor(cantidad / 500) >= 1) {
  cantidadMonedas500 = Math.floor(cantidad / 500);
  cantidad = cantidad % 500
}
if (Math.floor(cantidad / 200) >= 1) {
  cantidadMonedas200 = Math.floor(cantidad / 200);
  cantidad = cantidad % 200
}
if (Math.floor(cantidad / 100) >= 1) {
  cantidadMonedas100 = Math.floor(cantidad / 100);
  cantidad = cantidad % 100
}
if (Math.floor(cantidad / 50) >= 1) {
  cantidadMonedas50 = Math.floor(cantidad / 50);
  cantidad = cantidad % 50
}

console.log(`Cantidad de billetes:
de 100000 ${cantidadBilletes100000} 
de 50000 ${cantidadBilletes50000}
de 20000 ${cantidadBilletes20000}
de 10000 ${cantidadBilletes10000}
de 5000 ${cantidadBilletes5000}
de 2000 ${cantidadBilletes2000}
de 1000 ${cantidadBilletes1000}
Cantidad de monedas: 
de 500 ${cantidadMonedas500}
de 200 ${cantidadMonedas200}
de 100 ${cantidadMonedas100}
de 50 ${cantidadMonedas50}`);
