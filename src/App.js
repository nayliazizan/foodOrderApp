import logo from './logo.svg';
import './App.css';
import { Fragment, useContext } from 'react';
import itemsContext from './store/items-context';

function App() {
  const itemsCx = useContext(itemsContext);
  return (
    <Fragment>
      {itemsCx.switchPage ? <Users/>: <Admin/>}
      <Footer/>
    </Fragment>
  );
}

export default App;
