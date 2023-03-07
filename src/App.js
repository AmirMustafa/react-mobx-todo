import './App.css';
import Home from './components/Home';
import UserStore from './UserStore';


function App() {
  const store = new UserStore();
  return (
    <Home store={store} />
  );
}

export default App;
