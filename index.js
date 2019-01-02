'use strict';

const Telegram = require('telegram-node-bot');
const BOT_TOKEN = '728817190:AAHqeir1t16C-MdWj2tpimhwa3fXAe6cP3I';
const tg = new Telegram.Telegram(BOT_TOKEN, {
    workers: 1
});

const PingController = require('./constrollers/ping'),
      OtherwiseController = require('./constrollers/otherwise'),
      StartController = require('./constrollers/start'),
      HelpController = require('./constrollers/help'),
      SectrollController = require('./constrollers/sectroll');


tg.router.when(new Telegram.RegexpCommand( new RegExp('нет?[\.,!?()]$|нет$'), 'pingCommand'), new PingController())
        .when(new Telegram.RegexpCommand(new RegExp('(раз|раза)'), 'sectrollCommand'), new SectrollController())
        .when(new Telegram.TextCommand('/help', 'helpCommand'), new HelpController())
        .when(new Telegram.TextCommand('/start', 'startCommand'), new StartController());