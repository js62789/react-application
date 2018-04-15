let ReactApplication;

if (process.env.NODE_ENV === 'production') {
  ReactApplication = require('../build').ReactApplication;
} else {
  ReactApplication = require('../src').ReactApplication;
}

const app = new ReactApplication();

app.compile().then(stats => {
  console.log('Compile complete');
});
