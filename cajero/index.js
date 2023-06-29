let m = parseInt("Ingrese la cantidad de pesos que desea registrar:");
function cajero(m) {
    r1=Math.floor(m/500) ;
    r2=Math.floor(m/200);
    r3=Math.floor(m/100);
    r4=Math.floor(m/50);
    r5=Math.floor(m/20);
    r6=Math.floor(m/10);
    r7=Math.floor(m/5);
    r8=Math.floor(m/2);
    r9=Math.floor(m/1);
switch(true){
    case (r1!=0&&r2!=0&&r3!=0&&r4!=0&&r5!=0&&r6!=0&&r7!=0&&r8!=0&&r9!=0):
        console.log(r1," billetes de 500 euros");
        console.log(r2," billetes de 200 euros");
        console.log(r3," billetes de 100 euros");
        console.log(r4," billetes de 50 euros");
        console.log(r5," billetes de 20 euros");
        console.log(r6," billetes de 10 euros");
        console.log(r7," billetes de 5 euros");
        console.log(r8," monedas de 2 euros");
        console.log(r9," monedas de 1 euros");
        break;
        case(r2!=0&&r3!=0&&r4!=0&&r5!=0&&r6!=0&&r7!=0&&r8!=0&&r9!=0):
        console.log(r2," billetes de 200 euros");
        console.log(r3," billetes de 100 euros");
        console.log(r4," billetes de 50 euros");
        console.log(r5," billetes de 20 euros");
        console.log(r6," billetes de 10 euros");
        console.log(r7," billetes de 5 euros");
        console.log(r8," monedas de 2 euros");
        console.log(r9," monedas de 1 euros");
        break;
        case(r3!=0&&r4!=0&&r5!=0&&r6!=0&&r7!=0&&r8!=0&&r9!=0):
        console.log(r3," billetes de 100 euros");
        console.log(r4," billetes de 50 euros");
        console.log(r5," billetes de 20 euros");
        console.log(r6," billetes de 10 euros");
        console.log(r7," billetes de 5 euros");
        console.log(r8," monedas de 2 euros");
        console.log(r9," monedas de 1 euros");
        break;
        case(r4!=0&&r5!=0&&r6!=0&&r7!=0&&r8!=0&&r9!=0):
        console.log(r4," billetes de 50 euros");
        console.log(r5," billetes de 20 euros");
        console.log(r6," billetes de 10 euros");
        console.log(r7," billetes de 5 euros");
        console.log(r8," monedas de 2 euros");
        console.log(r9," monedas de 1 euros");
        break;
        case(r5!=0&&r6!=0&&r7!=0&&r8!=0&&r9!=0):
        console.log(r5," billetes de 20 euros");
        console.log(r6," billetes de 10 euros");
        console.log(r7," billetes de 5 euros");
        console.log(r8," monedas de 2 euros");
        console.log(r9," monedas de 1 euros");
        break;
        case(r6!=0&&r7!=0&&r8!=0&&r9!=0):
        console.log(r6," billetes de 10 euros");
        console.log(r7," billetes de 5 euros");
        console.log(r8," monedas de 2 euros");
        console.log(r9," monedas de 1 euros");
        break;
        case(r7!=0&&r8!=0&&r9!=0):
        console.log(r7," billetes de 5 euros");
        console.log(r8," monedas de 2 euros");
        console.log(r9," monedas de 1 euros");
        break;
        case(r8!=0&&r9!=0):
        console.log(r8," monedas de 2 euros");
        console.log(r9," monedas de 1 euros");
        break;  case(r9!=0):
        console.log(r9," monedas de 1 euros");
        break;
}
    return r;
}
let re=cajero(110)
/*billetes 500, 200, 100, 50, 20 , 10, 5
monedas 2,1*/ 