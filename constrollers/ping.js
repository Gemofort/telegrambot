'use strict';

const Telegram = require('telegram-node-bot');

class PingController extends Telegram.TelegramBaseController {

    pingHandler($){
        $.sendMessage('Пидора ответ!');
    }

    get routes(){
        return{
            'pingCommand' : 'pingHandler'
        };
    }
}

module.exports = PingController;