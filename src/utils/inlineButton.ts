import TelegramBot from 'node-telegram-bot-api';

export const getSocialMediaBtn = ({
  playLink
}: {
  playLink: string;
}): TelegramBot.InlineKeyboardButton[][] => [
  [
    {
      text: '🐹 Play to Earn Now 🐹',
      web_app: {
        url: playLink
      }
    }
  ],
  [
    {
      text: 'Join Community',
      url: 'https://t.me/BeanGoTown'
    }
  ],
  [
    {
      text: 'Follow X',
      url: 'https://x.com/intent/user?screen_name=beangotown'
    }
  ]
];
