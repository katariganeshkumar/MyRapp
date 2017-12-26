import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { DatePicker, Popconfirm, message } from 'antd';
import 'antd/dist/antd.css'; 



function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}



const App = () => (
  <div>
    <h2 align="center">hello this is working </h2>
    <DatePicker />

    <Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </Popconfirm>
  </div>
);

render(<App />,document.getElementById('root'));
