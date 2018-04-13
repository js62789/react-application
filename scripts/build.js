import ReactApplication from '../src/ReactApplication';

async function build(app) {
  const config = await app.configure();
  const compiler = app.getCompiler(config);
  compiler.run(() => {
    console.log('Compile complete');
  });
}

build(new ReactApplication());
