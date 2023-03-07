import './App.css';
import Home from './components/Home';
import About from './components/About';
import UserStore from './UserStore';


function App() {
  const store = new UserStore();
  return (
    <>
      <Home store={store} />
      <About store={store} />
    </>
  );
}

export default App;
