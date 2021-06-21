import React from 'react';
import {DSProvider} from '@synerise/ds-core';
import Button from '@synerise/ds-button';
import Menu from '@synerise/ds-menu';
import Dropdown from '@synerise/ds-dropdown';
import message from '@synerise/ds-message';
import './App.css';

function App() {

  const showMessage = () => {
    message.success('Yeah!');
  }

  const menu = (
    <Menu asDropdownMenu>
      <Menu.Item onClick={showMessage}>Show Message</Menu.Item>
      <Menu.Item>Option #2</Menu.Item>
      <Menu.Item>Option #3</Menu.Item>
      <Menu.Item>Option #4</Menu.Item>
      <Menu.Item>Option #5</Menu.Item>
    </Menu>
  ) 
  return (
    <div className="App" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'absolute'}}>
     <DSProvider>
      <Dropdown overlay={menu}>
      <Button type='primary'>Toogle</Button>
      </Dropdown>
     </DSProvider>
    </div>
  );
}

export default App;
