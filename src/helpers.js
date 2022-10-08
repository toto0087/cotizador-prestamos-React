export function calcularTtotal(cantidad,plazo) {
    let totalcantidad;
    if(cantidad <= 1000) {
        totalcantidad = cantidad * .25;
    } else if(cantidad > 1000 && cantidad <= 5000) {
        totalcantidad = cantidad * .20;
    } else if(cantidad > 5000 && cantidad <= 10000) {
        totalcantidad = cantidad * .15;
    } else {
        totalcantidad = cantidad * .10;
    }



    let totalPlazo = 0;
    switch(plazo) {
        case 3:
            totalPlazo = cantidad * .05;
            break;
        case 6:
            totalPlazo = cantidad * .10;
            break;
        case 12:
            totalPlazo = cantidad * .15;
            break;
        case 24:
            totalPlazo = cantidad * .25;
            break;
        default:
            break;
    }
    console.log(totalPlazo)
    return totalPlazo + totalcantidad + cantidad;
}

