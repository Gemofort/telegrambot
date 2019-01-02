'use strict';

const Telegram = require('telegram-node-bot');

class SectrollController extends Telegram.TelegramBaseController {

    sectrollHandler($) {
        $.sendMessage('Ведь первый раз не пидорас');
    }

    get routes() {
        return{
            'sectrollCommand' : 'sectrollHandler'
        };
    }
}

module.exports = SectrollController;