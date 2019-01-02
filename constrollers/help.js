'use strict';

const Telegram = require('telegram-node-bot');

class HelpController extends Telegram.TelegramBaseController {

    helpHandler($) {
        $.sendMessage('I am just a bot who troll you when a sentence ends with "нет"');
    }

    get routes() {
        return{
            'helpCommand' : 'helpHandler'
        };
    }
}

module.exports = HelpController;