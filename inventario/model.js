
let inventario ={
 granos:{
  arroz:20,
  frijoles:50,
  lentejas:89
},
aseo:{
  jabon:45,
  limpido:23,
  champu:15
},
carnes:{
pescado:12,
res:52,
cerdo:20
},
lacteos:{
yogurt:15,
leche:25,
kumis:250
}
}
function ActualizarInventa(cat,prod,cant) {
  inventario[cat][prod]+=cant;
}
function mostrar() {
  return inventario ;
}
export { ActualizarInventa,mostrar };

