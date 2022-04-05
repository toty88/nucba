// let cantidad = prompt("cuantos alumnos? ");
// let curso = [];

// for (let i = 0; i < cantidad; i++) {
//     curso[i] = [prompt((i+1) + ") Nombre ? "), 0];
// }

// const Asistenia = (nombre,pos,dia)=>
// {
//     let asist = prompt(`Dia: ${dia}) - Asistencia para ${nombre} - [a:p]: `);
//     while(!isNaN(asist) || (asist !== "p" && asist !== "P") && (asist !== "a" && asist !== "A"))
//     {
//         asist = prompt(`Error - Dia: ${dia}) - Asistencia para ${nombre} - [a:p]: `);
//     }
//     if(asist == "p" || asist == "P")
//     {
//         curso[pos][1] += 1;
//     }
// }

// for (let i = 0; i < 3; i++) {
//     for(alumno in curso)
//     {
//         Asistenia(curso[alumno][0],alumno,i+1);
//     }
// }

// for(alumno in curso)
// {
//     let resu = `Alumno: ${curso[alumno][0]}<br/>
//                 ______asistencia: ${parseInt(curso[alumno][1])}<br/>
//                 ______faltas: ${parseInt(3 - curso[alumno][1])}<br/>`;
//     document.writeln(resu);
// }

let main = document.querySelector(".main");
console.log(main.nodeType);
const listaDesordenada = document.querySelector(".lista");
const textNode = document.createTextNode("esto es un texto nuevo");
const elemento = document.createElement("li");
elemento.innerHTML.createTextNode(textNode);
listaDesordenada.appendChild(elemento);

