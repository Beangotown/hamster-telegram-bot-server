import { bot } from './bot';

import {
  onCallbackQuery,
  onHelpCommand,
  onMessageHandler,
  onStartCommand,
  onTokenomicsCommand
} from './command';

async function main(): Promise<void> {
  bot.onText(/\/start/, onStartCommand);
  bot.onText(/\/help/, onHelpCommand);
  bot.onText(/\/tokenomics/, onTokenomicsCommand);

  bot.on('callback_query', onCallbackQuery);
  bot.on('message', onMessageHandler);
}

main();
