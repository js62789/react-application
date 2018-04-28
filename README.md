## What it is
This project is intended to provide you with boilerplate to quickly get started building a universal React application. It comes out of the box with
- hot reloading
- universal rendering
- sensible webpack 4 configuration

## Getting Started
1. Install

```
npm install https://github.com/js62789/react-application
```

2. Import
```javascript
import { ReactApplication } from 'react-application';
```

3. Run
```javascript
const app = new ReactApplication();

await app.start()

console.log(`Listening on port ${app.config.get('port')}`);
```

4. Compile
```javascript
const app = new ReactApplication();

await app.compile();
```

## Building with ReactApplication

1. Extend
```javascript
import path from 'path';
import { ReactApplication } from 'react-application';

class MyApplication extends ReactApplication {
  constructor() {
    super();
    this.addConfiguration(path.join(__dirname, 'path/to/config/files'), __dirname);
  }
}
```

2. Configure

Configuration is structured and imported using [confit](https://github.com/krakenjs/confit). Configuration is layered, so that the top-most configuration takes precedence over the underlying default configurations.

```javascript
// config/config.json
{
  "rootPath": "path:.",
  "distPath": "path:./dist",
  "react": {
    "rootComponentPath": "sourcepath:./components",
    "reducersPath": "sourcepath:./reducers"
  }
}
```
