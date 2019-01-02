'use strict';

const Telegram = require('telegram-node-bot');

class OtherwiseController extends Telegram.TelegramBaseController{

    handle($){
        $.sendMessage('Sry, ai doughnt anderstend');
    }
}

module.exports = OtherwiseController;