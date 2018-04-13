let ReactApplication;

if (process.env.NODE_ENV === 'production') {
  ReactApplication = require('../build').ReactApplication;
} else {
  ReactApplication = require('../src').ReactApplication;
}

const app = new ReactApplication();

app.start().then(() => {
  console.log(`Listening on port ${app.config.get('port')}`);
});
