const { Router } = require('express');

const palyer = require('../controllers/player');
const raw = require('../controllers/queryCRUD');
const deck = require('../controllers/deck');

const router = Router();

router.get('/', (req, res) => res.send('Bienvenido'))

router.get('/deck', deck.Fabrica);

router.get('/player', palyer.calculateWinPercentage);
router.get('/player', palyer.dealerDrawing);
router.get('/player', palyer.getWinner);

router.get('/query1', raw.query1);
router.get('/query2', raw.query2);
router.get('/query3', raw.query3);
router.get('/query4', raw.query4);
router.get('/query', raw.query);

module.exports = router;
