import path from 'path';
import { WebApplication } from 'web-application';

export default class ReactApplication extends WebApplication {
  constructor() {
    super();
    this.addConfiguration(path.join(__dirname, '..'), __dirname);
  }
}
