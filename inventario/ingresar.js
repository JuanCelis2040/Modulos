import { ActualizarInventa} from "./model.js";
import { mostrarInv } from "./disponibles.js";

function agg() {
  let cat = prompt("Ingrese la categoria del producto");
  if (cat==="granos"||cat==="aseo"||cat==="lacteos"||cat==="carnes") {
    let prod=prompt("Ingrese el nombre del producto");
if (prod==="arroz"||prod==="frijoles"||prod==="lentejas"||prod==="jabon"||prod==="limpido"||prod==="champu"||prod==="pescado"||prod==="res"||prod==="cerdo"||prod==="yogurt"||prod==="leche"||prod=="kumis") {
  let cant=parseInt(prompt("Ingrese la cantidad del producto que desea añadir"))
  ActualizarInventa(cat,prod,cant);
  console.log(`Se ingresaron ${cant} del producto ${prod}`);
  let rr=prompt("Desea ver la cantidad actualizada?")
  if (rr=="si") {
    console.log(mostrarInv());
  }
}
else{
  console.log("Ingrese un producto valido");

}
  }
  else{
    console.log("Ingrese una categoria valida");
   
  }
  
}
export {agg};