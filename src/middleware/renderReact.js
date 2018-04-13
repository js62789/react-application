import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export default function(rootComponentPath, rootId, reducersPath) {
  const RootComponent = require(rootComponentPath).default;
  const reducers = require(reducersPath).default;
  return function(req, res, next) {
    const store = createStore(reducers, req.initialState);
    const context = {};

    const markup = ReactDOMServer.renderToString(
      <IntlProvider locale="en">
        <StaticRouter location={req.originalUrl} context={context}>
          <Provider store={store}>
            <RootComponent />
          </Provider>
        </StaticRouter>
      </IntlProvider>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(context.status || 200).send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${req.config.get('title')}</title>
          </head>
          <body>
            <div id="${rootId}">${markup}</div>
            <script src="/vendor.bundle.js"></script>
            <script src="/client.bundle.js"></script>
          </body>
        </html>
      `);
    }
  }
}
