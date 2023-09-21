const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 1, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";
    let limite = hasta;

    for (let i = 1; i <= limite; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
    }

    if (listar) {
      console.log("==================================".green);
      console.log(`     Tabla del ${colors.blue(base)}       `.red);
      console.log("==================================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salidas/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt creado`;
  } catch (er) {
    throw er;
  }
};

module.exports = { crearArchivo };
