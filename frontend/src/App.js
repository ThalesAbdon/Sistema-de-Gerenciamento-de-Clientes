import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import './app.css';
import Registrar from './pages/Register'
import Listar from './pages/List'
import Entregas from './pages/Delivery'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Client Hub</h1>
          <Link to="/registrar">Registrar</Link>
          <Link to="/listar">Listar</Link>
          <Link to="/entregas">Entregas</Link>
        </nav>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/registrar/" element={<Registrar />} />
          <Route path="/listar/" element={<Listar />} />
          <Route path="/entregas/" element={<Entregas />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App