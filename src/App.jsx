import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCards from './AddCards'
import CollectionView from './CollectionView'
import AddCollection from './AddCollection';
import './App.css'

function App() {
 

  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/AddCollection" element={<AddCollection/>}/>
          <Route path="collection/:id/AddCards" element={<AddCards />} />
          <Route path="/" element={<CollectionView/>}/>
          <Route path="/collection/:id" element={<CollectionView />}/>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
