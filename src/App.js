import './index.css';
import Nav from './components/Nav.jsx';
import Landing from './components/landing.jsx';
import Highlights from './components/highlight.jsx';
import Featured from './components/featured.jsx';
import Discounted from './components/UI/discounted.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
    </div>
  );
}

export default App;
