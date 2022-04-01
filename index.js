let express    = require('express');
let bodyParser = require('body-parser');
let mongoose   = require('mongoose');

let application = express();

let apiRouter = require('./routes/router');

application.use(bodyParser.urlencoded({ extended: false }));

application.use(bodyParser.json());

// Conexão com o Banco de Dados
const dbPath = 'mongodb://localhost/dadosApplication';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log('[INFO] Conectado ao Banco de Dados');
}, err => {
    console.log(err, '[ERRO] Um error foi encontrado');
});

var db = mongoose.connection;

// Verificaçãio de conexão com o Banco de Dados
if(!db)
    console.log('[ERRO] Error ao se conectar ao Banco de Dados');
else
    console.log('[SUCESS] Banco de dados conectado com sucesso')

// Definir porta do servidor
let port =process.env.PORT || 3000;

// Utilizar API Routes na aplicação
application.use('/api', apiRouter);

application.listen(port, () => console.log('[SUCESS] Servidor rodando na porta: ' + port));