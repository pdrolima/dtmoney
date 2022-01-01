import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'First transaction',
          category: 'Development',
          value: 1000,
          date: '2020-01-01',
          type: 'income',
          createdAt: Date.now(),
        },
        {
          id: 2,
          title: 'Second transaction',
          category: 'Food',
          value: 50,
          date: '2020-01-01',
          type: 'Outcome',
          createdAt: Date.now(),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transactions');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transactions', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
