import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { createStore } from 'redux';

export default function renderClient(RootComponent, rootId, reducers) {
  const supportsHistory = 'pushState' in window.history;
  const store = createStore(reducers, window.initialState);

  ReactDOM.hydrate(
    <IntlProvider locale="en">
      <BrowserRouter forceRefresh={!supportsHistory}>
        <Provider store={store}>
          <RootComponent />
        </Provider>
      </BrowserRouter>
    </IntlProvider>,
    document.querySelector(`#${rootId}`)
  );
}
