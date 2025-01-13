interface IMessageType {
  text?: string;
  title?: string;
  link?: string;
}
const getHowToEarnMessageList = ({ liquidityLink }: { liquidityLink: string }): IMessageType[] => [
  {
    text: 'How to Earn in 🐹 Hamster Woods:'
  },
  {
    title: '<b>🕹️ Hop to Earn</b>',
    text: 'Play Hamster Woods for free every day to collect precious ACORNS. These ACORNS can be traded on DEX for other valuable assets like ELF or USDT.'
  },
  {
    title: '<b>🏆 Win Valuable NFTs</b>',
    text: 'Collect more ACORNS to rank in the top 10 on the weekly leaderboard and win NFT prizes worth $5 each. The 1st place winner can earn up to $15 each week!'
  },
  {
    title: '<b>💰 LP Profits</b>',
    text: 'Provide liquidity to the ACORNS/ELF trading pair on DEX to earn both ACORNS and ELF.',
    link: `<a href="${liquidityLink}">Start Here</a>`
  },
  {
    title: '<b>🚀 Stake to Earn (Coming Soon)</b>',
    text: 'Stake ACORNS and watch your holdings grow over time.'
  },
  {
    text: `Need a guide for gameplay? Check out our <a href="https://www.youtube.com/watch?v=qtqNe4uRUQQ">video walkthrough.</a>`
  }
];

export const getHowToEarnText = ({ liquidityLink }: { liquidityLink: string }): string => {
  return getHowToEarnMessageList({ liquidityLink }).reduce((pre, cur) => {
    let message = Object.values(cur).reduce((pre, cur) => `${pre}\n${cur}`, '');
    message += '\n';
    return (pre += message);
  }, '');
};

export const helpMessageList = [
  {
    text: '🐹 Hamster Woods is a free-to-play casual game that rewards players with valuable on-chain tokens and NFTs. Join us on a journey of HopToEarn!'
  },
  {
    title: '<b>🎥 Tutorials</b>',
    text: `Need a guide for gameplay? Check out our <a href="https://www.youtube.com/watch?v=qtqNe4uRUQQ">video walkthrough</a>.\nWant to list NFT prizes for sale? Follow our <a href="https://www.youtube.com/watch?v=pL4C7riAVjw">instructions</a>.`
  },
  {
    title: '<b>📬 Issues & Suggestions</b>',
    text: `To optimise the game and provide an enjoyable experience, we appreciate your valuable feedback. Please feel free to share any issues you encounter or your suggestions with us!\nLink: <a href="https://form.hamster.beangotown.com/feedback">https://form.hamster.beangotown.com/feedback</a>`
  },
  {
    title: '<b>📢 Community</b>',
    text: `Join the Hamster Woods Telegram channel and follow X to never miss out on the latest!\nTelegram: <a href="https://t.me/BeanGoTown">https://t.me/BeanGoTown</a>\nX: <a href="https://x.com/beangotown">https://x.com/beangotown</a>\nChat: <a href="https://t.me/Portkey_Official_Group">https://t.me/Portkey_Official_Group</a>`
  }
];

export const getHelpMessageText = (): string => {
  return helpMessageList.reduce((pre, cur) => {
    let message = Object.values(cur).reduce((pre, cur) => `${pre}\n${cur}`, '');
    message += '\n';
    return (pre += message);
  }, '');
};
