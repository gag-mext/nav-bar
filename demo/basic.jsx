import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../src';
import Icon from '@gag/icon';

ReactDOM.render(
  <div>
    <NavBar leftContent="返回" mode="light" onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>
  </div>
, document.getElementById('sk-root'));
