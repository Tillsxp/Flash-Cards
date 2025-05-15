import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCards from './AddCards'
import ListCards from './CollectionView'
import './App.css'
import ListCollection from './ListCollection';

function App() {
 

  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ListCollection/>}/>
          <Route path="/AddCards" element={<AddCards />} />
          <Route path="/ListCards" element={<ListCards />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
