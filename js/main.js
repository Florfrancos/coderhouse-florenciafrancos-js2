let remeranegra = 10;
let remeraroja = 4;
let remerablanca = 7;
let opcion;
const STOCK_BAJO = 3;

do {
    opcion = parseInt(prompt(
        "Seleccione la opción que desea comprar:\n" +
        "1 - Remera Negra\n" +
        "2 - Remera Roja\n" +
        "3 - Remera Blanca\n" +
        "4 - Salir"
    ));

    switch (opcion) {
        case 1:
            if (remeranegra > 0) {
                remeranegra--;
                console.log("Compraste una remera negra. Stock restante: " + remeranegra);
                if (remeranegra <= STOCK_BAJO) {
                    console.log("Stock bajo de remera negra");
                }
            } else {
                console.log("No hay stock de remera negra");
            }
            break;
        case 2:
            if (remeraroja > 0) {
                remeraroja--;
                console.log("Compraste una remera roja. Stock restante: " + remeraroja);
                if (remeraroja <= STOCK_BAJO) {
                    console.log("Stock bajo de remera roja");
                }
            } else {
                console.log("No hay stock de remera roja");
            }
            break;
        case 3:
            if (remerablanca > 0) {
                remerablanca--;
                console.log("Compraste una remera blanca. Stock restante: " + remerablanca);
                if (remerablanca <= STOCK_BAJO) {
                    console.log("Stock bajo de remera blanca");
                }
            } else {
                console.log("No hay stock de remera blanca");
            }
            break;
        case 4:
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción inválida, elegí un número del 1 al 4");
    }
} while (opcion !== 4);

console.log("Gracias por visitarnos");