import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import CookiesContainer from './components/CookiesContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <CakeContainer/>
        <HooksCakeContainer/>
        <NewCakeContainer/>
        <IcecreamContainer/>
        <CookiesContainer/>

      </div>
    </Provider>
  );
}

export default App;
