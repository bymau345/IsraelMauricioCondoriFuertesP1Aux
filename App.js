// 1. Realiza un script que pida la edad y si es mayor de 18 años indica que ya puede conducir.

let edad = prompt("Introduzca la edad");
 if (Number(edad)==edad)
 {
     if (edad>18)
         document.write("Puede Conducir");
     else
         document.write("No puede Conducir");
 }


// 2. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 let sumas = 0;
 let num;
 do
  {

     num = prompt("Ingrese un numero");

     if (Number(num) == num)
     {

         num = Number(num);

         sumas = sumas + num;
     }

     else {

         if (num != undefined) {
             alert(num + " No es un numero");
         }
  }

 }
 while (num != undefined);

 document.write(sumas);

// 3. Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

const Primernombre = prompt("Nombre 1:");
const Primeraedad = Number(prompt("Edad 1:"));
const Segundonombre = prompt("Nombre 2:");
const Segundaedad = Number(prompt("Edad 2:"));
const Tercernombre = prompt("Nombre 3:");
const Terceraedad = Number(prompt("Edad 3:"));
const maximo = Math.max(Primeraedad, Segundaedad, Terceraedad);

 if (maximo == Primeraedad) {
      document.write("El mayor es: " + Primernombre);
  }
  if (maximo == Segundaedad) {
      document.write("El mayor es: " + Segundonombre);
 }
  if (maximo == Terceraedad) {
      document.write("El mayor es: " + Tercernombre);
  }

// 4. Genera 3 números aleatorios entre 1 y 99 pero que no se repita ninguno.

 let i = 0;
 let numero;
      let uno = 0;
      let dos = 0;
      let tres = 0;
      do {
          numero = Math.floor((Math.random() * 99) + 1);
          if ((numero != uno) && (numero != dos) && (numero != 3)) {
             document.write(numero + "<br>");
             i++;
            if (i == 1) {
                uno = numero;
              }
             if (i == 2) {
                 dos = numero;
              }
              if (i == 3) {
                 tres = numero;
              }
          }
      } while (i < 3);

// 5. Realiza un script que cuente el número de vocales que tiene un texto.

let cadena = prompt("Introduce una cadena de texto:");
const numchar = cadena.length;   
  cadena = cadena.toUpperCase();  
  let caracter;
  let cont = 0;
  let i;
  for (i = 0; i < numchar; i++) {
  caracter = cadena.charAt(i);    
  if ((caracter == "A") || (caracter == "E") || (caracter == "I") || (caracter == "O") || (caracter == "U")) {
         cont++;
          }
    }
      document.write("Número de Vocales: " + cont + ".");

// 6. Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la
// // cadena que se encuentra entre los paréntesis. Ejemplo: Si escribimoe el texto “Hola (que) tal” se mostrará
// // “que”. Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo “(“pero no el signo “)” mostrará
// // desde el primer paréntesis hasta el final.

const cadena = prompt("Introduce un Texto que contenga paréntesis:");
let numchar = cadena.length;
let j;
let caracter;
let salida = "";
let copiar = false;
    for (j = 0; j < numchar; j++) {
    caracter = cadena.charAt(j);    
      if (caracter == ")") {
          copiar = false;
      }
      if (copiar) {
          salida = salida + caracter;
     }
      if (caracter == "(") {
              copiar = true;
      }
  }
  document.write(salida);

// // 7. Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá
// // mostrar “lat euq aloh”

let cadena = prompt("Introduce un Texto:");
let numchar = cadena.length;
let j;
let caracter;
let salida = "";
for (j = 0; j < numchar; j++) {
     caracter = cadena.charAt(j);   
     salida = caracter + salida;
 }
 document.write(salida);

// // 8. Realiza un script que muestre la serie de fibonacci hasta un número entre 1 y 100 pedido por teclado.

 let numero = Number(prompt("Introduce un número entre 1 y 100"));
   if((numero >= 1) && (numero <= 100)) {
     let x = 0;
     let y = 1;
     let z;
    
     document.write(x + "<br>");

     for (i = 0; i < (numero-1); i++) {
         z = x + y;
         document.write(z + "<br>");
         y = x;
         x = z;
    }
 }
 else {
     alert("Número erróneo");
 }

 //9. Realiza un juego de Piedra Papel Tijera contra el Pc.

 let jugados = 0;
 let ganados = 0;
 let perdidos = 0;
 do {
     let jugada = prompt("Escribe \"piedra\", \"papel\" o \"tijera\"");
     let aleatorio = Math.floor((Math.random() * 9) + 1);
     let elige = "";
     if (aleatorio <= 3) {
         elige = "piedra";
     }
     else if (aleatorio <= 6) {
         elige = "papel";
     }
     else {
         elige = "tijera";
     }

     if ((jugada == "piedra") && (elige == "piedra")) {
         alert(jugada+"-"+elige+": Empate");
     }
     else if ((jugada == "piedra") && (elige == "papel")) {
         alert(jugada+"-"+elige+": Gana PC");
         perdidos++;
     }
     else if ((jugada == "piedra") && (elige == "tijera")) {
         alert(jugada+"-"+elige+": Gana Jugador");
         ganados++;
     }
     else if ((jugada == "papel") && (elige == "papel")) {
         alert(jugada+"-"+elige+": Empate");
     }
     else if ((jugada == "papel") && (elige == "tijera")) {
         alert(jugada+"-"+elige+": Gana PC");
         perdidos++;
    }
     else if ((jugada == "papel") && (elige == "piedra")) {
         alert(jugada+"-"+elige+": Gana Jugador");
         ganados++;
     }
     else if ((jugada == "tijera") && (elige == "tijera")) {
         alert(jugada+"-"+elige+": Empate");
     }
     else if ((jugada == "tijera") && (elige == "piedra")) {
        alert(jugada+"-"+elige+": Gana PC");
         perdidos++;
     }
     else if ((jugada == "tijera") && (elige == "papel")) {
         alert(jugada+"-"+elige+": Gana Jugador");
         ganados++;
     }
     jugados++;

 } while (confirm("Jugar de nuevo"));

document.write("Partidas jugadas: "+jugados+"<br>");
document.write("Partidas ganadas: "+ganados+"<br>");
document.write("Partidas perdidas: "+perdidos+"<br>");
document.write("Partidas empatadas: "+(jugados-ganados-perdidos));

// // 10. Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva,
// // aplicará el 21 por ciento por defecto.


function masIva(precio, iva){
    iva = iva || 21
    let coniva = (precio + precio*iva/100);
    return coniva;
  }
  let precio = Number(prompt("Introduce un precio"));
  let iva = Number(prompt("Introduce el iva"));
  let resultado;
  if(iva > 0){
      resultado = masIva(precio, iva);
  }
  else{
      resultado = masIva(precio);
  }
  document.write("Precio sin iva: " + precio);
  document.write("<br>Precio más Iva: " + resultado);
  
