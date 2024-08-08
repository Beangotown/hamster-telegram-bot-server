import { bot } from '../bot';
import { CONFIG } from '../constants';
import app from './index';
import { clearWebhook, setWebhook } from './webhook';

const serviceUrl = CONFIG.SERVICE_URL;
const webhookPath = '/bot-server/path-to-webhook';
const webhookUrl = `${serviceUrl}${webhookPath}`;

export async function startNodeServer(): Promise<void> {
  app.post(webhookPath, (req, res) => {
    try {
      console.log('==request', req?.body?.message?.text);
      bot.processUpdate(req.body);
      res.sendStatus(200);
    } catch (error) {
      console.error('Error handling webhook update:', error);
      res.sendStatus(500);
    }
  });

  app.get('/bot-server/test', (req, res) => {
    res.send('work!');
    console.log('/bot-server/test', req);
  });

  app.listen(3333, async () => {
    console.log('Webhook server is listening on port 3333');
    await clearWebhook();
    setWebhook({ webhookUrl });
  });
}
