import { Fragment } from 'react';
import './App.css';

import InputList from './components/InputList';
import ListLists from './components/ListLists';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputList />
        <ListLists />
      </div>
    </Fragment>
  );
}

export default App;
