const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    describe: "The base of product",
    demandOption: true,
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    describe: "How many numbers",
    default: 10,
  })
  .check((argv, options) => {
    if (isNaN(argv.h)) {
      throw "Los numeros se puede multiplicar por numeros....";
    }
    return true;
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    describe: "Show or not, dumbass...",
    default: false,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
