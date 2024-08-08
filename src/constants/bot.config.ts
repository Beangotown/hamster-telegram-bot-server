export const BOT_CONFIG_ONLINE = {
  polling: false
};

export const BOT_CONFIG_LOCAL = {
  polling: true,
  request: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    url: undefined as any,
    proxy: 'http://127.0.0.1:7890'
  }
};

export const BOT_CONFIG = process.env.IS_LOCAL ? BOT_CONFIG_LOCAL : BOT_CONFIG_ONLINE;
