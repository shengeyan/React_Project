import React from 'react';
import ReactDOM from 'react-dom/client';
// 入口样式文件
import './index.css';
// 引入根组件
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 去掉严格模式
    <App />

);

reportWebVitals();
