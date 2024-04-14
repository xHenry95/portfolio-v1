import { 
  BrowserRouter as Router, 
  Link, 
  useRoutes 
} from 'react-router-dom';
import './App.css';

// page imports
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function Routes() {
  const element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/portfolio', element: <Portfolio /> },
    { path: 'https://github.com', element: '' },
    { path: '/contact', element: <Contact />}
  ])
  return element;
}

function App() {
  return (
    <Router>
      <nav className='navbar'>
        <Link className='button type1' to='/portfolio'>Portfolio</Link>
        <Link className='nav-button' to='https://github.com'>Github</Link>
        <Link className='nav-button' to='/contact'>Contact</Link>
        <Link className='nav-button' to='/contact'>Contact</Link>
      </nav>
      <Routes />
    </Router>
  );
}

export default App;
