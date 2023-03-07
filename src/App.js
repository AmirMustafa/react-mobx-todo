import './App.css';
import Home from './components/Home';
import UserStore from './UserStore';


function App() {
  const store = UserStore();
  return (
    <Home store={store} />
  );
}

export default App;
