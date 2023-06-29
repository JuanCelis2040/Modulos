import { mostrarInv } from "./disponibles.js";
import { agg } from "./ingresar.js";
import { eliminar } from "./eliminar.js";


function start() {
while (true) {
  let r=parseInt(prompt(`Que desea hacer?: 
  1. Mostrar productos 
  2. Agregar productos 
  3. Eliminar productos 
  4. Salir`))

switch (r) {
  case 1:
    mostrarInv()
    break;
    case 2:
      agg()
      break;
      case 3:
        eliminar()
        break;

        case 4:
          return r;
          
          default: console.log("Ingrese una opcion valida");
          break;
}
}
}

start("");
