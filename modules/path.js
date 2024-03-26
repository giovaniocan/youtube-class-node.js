const path = require('path');

//nome do arquivo atual
console.log(path.basename(__filename));

// Diretorio atual
console.log(path.dirname(__filename))

// extensao do arquivo
console.log(path.extname(__filename))

// criar objeto path
console.log(path.parse(__filename))

// junte varios caminhos
console.log(path.join(__dirname, 'teste'))
