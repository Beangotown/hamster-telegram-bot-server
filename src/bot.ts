import TelegramBot from 'node-telegram-bot-api';
// import * as process from 'process';
import { BOT_CONFIG } from './constants/bot.config';
import { CONFIG } from './constants';

export const bot = new TelegramBot(CONFIG.BOT_TOKEN, BOT_CONFIG);
