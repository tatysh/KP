import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Users, Table} from './componets/users';




 ReactDOM.render(
 <React.StrictMode>
    <Users />,
    <Table />
  </React.StrictMode>,
  document.getElementById('root')
);




