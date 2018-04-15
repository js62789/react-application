let ReactApplication;

if (process.env.NODE_ENV === 'production') {
  ReactApplication = require('../build').ReactApplication;
} else {
  ReactApplication = require('../src').ReactApplication;
}

async function build(app) {
  app.configure().then(config => {
    const compiler = app.getCompiler(config);
    compiler.run(() => {
      console.log('Compile complete');
    });
  });
}

build(new ReactApplication());
