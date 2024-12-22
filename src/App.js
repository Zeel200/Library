import './index.css';
import Nav from './components/Nav.jsx';
import Landing from './components/landing.jsx';
import Highlights from './components/highlight.jsx';
import Featured from './components/featured.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
    </div>
  );
}

export default App;
