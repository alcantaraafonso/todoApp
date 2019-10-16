import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';

//CSS da apllicaçao
import '../template/Custom.css';

import React from 'react';
import Routers from './Routes';
import Menu from '../template/Menu';

export default props => (
    <div className="container">
        <Menu />
        <Routers />
    </div>
)