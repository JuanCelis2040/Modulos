 import{mostrar} from "./model.js"
function mostrarInv() {
  let inventario= mostrar();
  console.log("Inventario: ");
  for (let cat in inventario) {
    console.log(`${cat}:`);
    for (let prod in inventario [cat]){
      console.log(`${prod}:${inventario[cat][prod]}`);
    }
    
  }
}
export {mostrarInv};