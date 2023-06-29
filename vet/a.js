function all(m) {
    let r="";
    let p="";
    switch (m) {
        case "Peluqueria":
            p=console.log("Quien desea que le preste su servicio (Ana o Claudio)");
            r=console.log("30.000 perros, 40.000 gatos");

            break;
        case "Baño":
            p=console.log("Quien desea que le preste su servicio (Milena, Rosa o Maria)");
            r=console.log("25.000 gatos, 35.000 perros");
            break;
            case "Veterinaria":
                p=console.log("Quien desea que le preste su servicio (Raul o Laura)");
                r=console.log("30.000 consultas, 120.000 esterilizacion");
                break;
        default:
                console.log("Ingrese un servicio valido");
            break;
    }
    return p,r
}
export {all};