import { bot } from '../bot';

export async function clearWebhook(): Promise<void> {
  try {
    await bot.deleteWebHook();
    console.log('Webhook cleared');
  } catch (error) {
    console.error('Error clearing webhook:', error);
  }
}

export async function setWebhook({ webhookUrl }: { webhookUrl: string }): Promise<void> {
  try {
    const res = await bot.setWebHook(webhookUrl, {
      max_connections: 1000,
      // drop_pending_updates: true,
      allowed_updates: [
        'message',
        'callback_query',
        'inline_query',
        'chosen_inline_result',
        'edited_message',
        'channel_post',
        'edited_channel_post',
        'poll',
        'my_chat_member',
        'chat_member',
        'poll_answer',
        'chat_join_request'
      ]
    });
    console.log(`res:${res} Webhook set to ${webhookUrl}`);
  } catch (error) {
    console.error('Error setting webhook:', error);
  }
}
