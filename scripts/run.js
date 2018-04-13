import { ReactApplication } from '../src';

const app = new ReactApplication();

app.start().then(() => {
  console.log(`Listening on port ${app.config.get('port')}`);
});
