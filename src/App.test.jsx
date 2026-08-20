import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { test, expect } from 'vitest';

test('renders without crashing', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByText(/ToDos/i)).toBeInTheDocument();
});
