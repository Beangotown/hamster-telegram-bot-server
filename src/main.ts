import { bot } from './bot';

import {
  onCallbackQuery,
  onHelpCommand,
  onMessageHandler,
  onStartCommand,
  onTokenomicsCommand
} from './command';
import { startNodeServer } from './server/server';

async function botServer(): Promise<void> {
  bot.onText(/\/start/, onStartCommand);
  bot.onText(/\/help/, onHelpCommand);
  bot.onText(/\/tokenomics/, onTokenomicsCommand);

  bot.on('callback_query', onCallbackQuery);
  bot.on('message', onMessageHandler);
}

async function main(): Promise<void> {
  startNodeServer();
  botServer();
}

main();
