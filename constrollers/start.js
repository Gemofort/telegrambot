'use strict';

const Telegram = require('telegram-node-bot');

class StartController extends Telegram.TelegramBaseController {

    startHandler($) {
        $.sendMessage('Hello');
        $.sendPhoto({ url: 'https://cdn.24.co.za/files/Cms/General/d/7585/34b81f78f6114125bdbce35ed8332015.jpg', 
                    filename: 'image.jpg'});
    }

    get routes() {
        return{
            'startCommand' : 'startHandler'
        };
    }
}

module.exports = StartController;