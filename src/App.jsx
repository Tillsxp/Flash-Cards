import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCards from './AddCards'
import CollectionView from './CollectionView'
import './App.css'
import ListCollection from './ListCollection';
import AddCollection from './AddCollection';

function App() {
 

  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AddCollection/>}/>
          <Route path="/AddCards" element={<AddCards />} />
          <Route path="/collection/:id" element={<CollectionView />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
