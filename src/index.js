import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Second from './Second';
import Functioncomponent from './Functioncomponent';
import Props from './Props';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<App/>
<Second/>
<Props/>
</>
);
const roots=ReactDOM.createRoot(document.getElementById('demo'));
roots.render(
    <Functioncomponent/>
)
