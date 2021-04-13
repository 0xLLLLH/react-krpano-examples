import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import ReduxApp from './App';

import './index.css';

const PageRedux: React.FC = () => (
    <div className="page-redux">
        <Provider store={store}>
            <ReduxApp />
        </Provider>
    </div>
);

export default PageRedux;
