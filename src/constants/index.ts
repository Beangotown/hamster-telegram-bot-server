import { TELEGRAM_BOT_TOKEN } from '../secrets';
import { TNetworkType } from '../types';

const networkType = (process.env.BUILD_ENV! as TNetworkType) ?? 'testnet';

const BOT_TOKEN_ONLINE =
  networkType === 'mainnet'
    ? process.env.TELEGRAM_BOT_TOKEN_MAINNET!
    : process.env.TELEGRAM_BOT_TOKEN_TESTNET!;

const BOT_TOKEN = process.env.IS_LOCAL ? TELEGRAM_BOT_TOKEN : BOT_TOKEN_ONLINE;

const configMap = {
  mainnet: {
    BOT_TOKEN: BOT_TOKEN,
    SERVICE_URL: 'https://hamster.beangotown.com',
    PLAY_URL: 'https://hamster.beangotown.com/',
    ADD_LIQUIDITY_LINK: 'https://app.awaken.finance/liquidity/ACORNS_ELF_0.3/add'
  },
  testnet: {
    BOT_TOKEN: BOT_TOKEN,
    SERVICE_URL: 'https://test-hamster.beangotown.com',
    PLAY_URL: 'https://test-hamster.beangotown.com/',
    ADD_LIQUIDITY_LINK: 'https://test-app.awaken.finance/liquidity/ACORNS_ELF_0.3/add'
  }
};

export const CONFIG = configMap[networkType];
