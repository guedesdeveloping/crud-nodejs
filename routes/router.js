let express = require('express');
let router = express.Router();

router.get('/', function(req, res){

    res.json({
        status: 'API Funcionando',
        message: '[SUCESS] Iniciada a API em MongoDB'
    });
});

var controller = require('../controllers/controller');

//Importar os dados routes

router.route('/dados')
    .get(controller.index)
    .post(controller.add);

router.route('/dados/:dados_id')
    .get(controller.view)
    .patch(controller.update)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;