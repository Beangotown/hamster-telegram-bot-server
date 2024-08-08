import TelegramBot from 'node-telegram-bot-api';
import { bot } from '../bot';
import { getHelpMessageText, getHowToEarnText } from '../theCopy';
import { getSocialMediaBtn } from '../utils/inlineButton';
import { CONFIG } from '../constants';

export const onStartCommand = async (msg: TelegramBot.Message): Promise<void> => {
  const chatId = msg.chat.id;
  await bot.sendMessage(
    chatId,
    '🕹️ Welcome to Hamster Woods, a free-to-play casual game that rewards players with valuable on-chain tokens and NFTs!',
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: '📖 Help'
            },
            {
              text: '🕹️ Play Game',
              web_app: {
                url: CONFIG.PLAY_URL
              }
            }
          ]
        ],
        resize_keyboard: true,
        one_time_keyboard: false,
        selective: false
      }
    }
  );

  await bot.sendPhoto(
    chatId,
    'https://raw.githubusercontent.com/Beangotown/hamster-woods-interface/dev/HamsterBg.png',
    {
      caption: `🐹 Hop, hop, hop!\nGuide a brave hamster through the wild woodland to collect precious ACORNS and turn them into money.\n\n🌰 Collect more ACORNS, rank high on the leaderboard, and win valuable NFTs worth $5 - $15 weekly.\n\n🎁 Receive surprise airdrops of USDT or ACORNS from time to time.`,
      reply_markup: {
        inline_keyboard: [
          ...getSocialMediaBtn({ playLink: CONFIG.PLAY_URL }),
          [
            {
              text: '💰 How to Earn 💰',
              callback_data: 'How to Earn'
            }
          ]
        ]
      }
    }
  );
};

export const onHelpCommand = async (msg: TelegramBot.Message): Promise<void> => {
  onHelpMessage(msg);
};

export const onTokenomicsCommand = async (msg: TelegramBot.Message): Promise<void> => {
  const chatId = msg.chat.id;

  bot.sendPhoto(
    chatId,
    'https://raw.githubusercontent.com/Beangotown/beangotown-tg-bot-node/main/tokenomics.png?token=GHSAT0AAAAAACTT27KGBTR6ULVX2Q6DDRGEZVSAN4A'
  );
};

export const onCallbackQuery = async (callbackQuery: TelegramBot.CallbackQuery): Promise<void> => {
  const message = callbackQuery.message;
  if (!message) return;
  const category = callbackQuery.data;
  let response = '';
  let parseMode: TelegramBot.ParseMode = 'Markdown';
  let disableWebPagePreview = true;

  switch (category) {
    case 'How to Earn':
      response = getHowToEarnText({
        liquidityLink: CONFIG.ADD_LIQUIDITY_LINK
      });
      parseMode = 'HTML';
      break;
  }

  if (!response) return;

  bot.sendMessage(message.chat.id, response, {
    parse_mode: parseMode,
    disable_web_page_preview: disableWebPagePreview,
    reply_markup: {
      inline_keyboard: getSocialMediaBtn({ playLink: CONFIG.PLAY_URL })
    }
  });
};

const onHelpMessage = async (msg: TelegramBot.Message): Promise<void> => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, getHelpMessageText(), {
    parse_mode: 'HTML',
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '🐹 Play Now 🐹',
            web_app: {
              url: CONFIG.PLAY_URL
            }
          }
        ]
      ]
    }
  });
};

export const onMessageHandler = async (msg: TelegramBot.Message): Promise<void> => {
  const text = msg.text;
  try {
    switch (text) {
      case '📖 Help':
        onHelpMessage(msg);
        return;
      default:
        // bot.sendMessage(chatId, `Received your message ${text}`);
        break;
    }
  } catch (error) {
    console.error('onMessage error', msg, error);
  }
};
