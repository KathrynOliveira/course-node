const path = require("path");

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Nome do diretoório atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

//Criar objeto Path
console.log(path.parse(__filename));

//Permite que juntar vários caminhos de arquivos
console.log(path.join(__dirname, "teste", "teste.html"));
