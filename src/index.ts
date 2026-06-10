import { start } from 'repl';
import { cuandoPasa, enviarAlFrontend, iniciar } from './lib/ui.ts';

/* Precios de los artistas en patacones 
ID_ARTISTA  | PRECIO
=============================
sabrina     |   1000
kgatlw      |    700
lali        |    500
magdalena   |    600
viagra      |    400
dillom      |    350
marilina    |    200
mugre       |    150

Descuentos:
CÓDIGO      | DESCUENTO
==============================
TIC10       |       10%
TIC20       |       20%
DARIO       |       50%
*/

// COMPLETAR: Implementar la función calcularTotal que reciba el id del artista, la cantidad de entradas y un código de descuento (opcional) y devuelva el precio total a pagar en patacones.

function calcularTotal(id:string, cant:number, codigo:string):number{
let preciobase:number;

if (id==="mugre"){ preciobase = 150}
else if (id==="marilina"){ preciobase=200}
else if (id==="dillom"){ preciobase=350}
else if (id==="viagra"){ preciobase=400}
else if (id==="magdalena"){ preciobase=600}
else if (id==="lali"){ preciobase=500}
else if (id==="kgatlw"){ preciobase=700}
else if (id==="sabrina"){ preciobase=1000}
else {preciobase=0}

let preciodesc:number;
if (codigo==="TIC10"){
  preciodesc=preciobase*0.9
}
else if (codigo==="TIC20"){
  preciodesc=preciobase*0.8
}
else if (codigo==="DARIO"){
  preciodesc=preciobase*0.5
}
else {
  preciodesc = preciobase;
}

let precioTotal:number;
precioTotal = preciodesc * cant;

return precioTotal;

}


cuandoPasa('seleccionarArtista', ({ id, cantidad, codigoDescuento }) => {
  let cantidadNum: number = Number(cantidad);
  let precio: number = calcularTotal(id, cantidadNum, codigoDescuento);
  enviarAlFrontend('mostrarPrecio', precio);
});

iniciar();
