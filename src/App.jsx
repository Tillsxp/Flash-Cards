import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCards from './AddCards'
import ListCards from './ListCards'
import './App.css'

function App() {
 

  return (
    <>
    <div>
      <Router>
        <Routes>
          {/* <Card/> Add flash card page*/}
          <Route path="/AddCards" element={<AddCards />} />
          <Route path="/ListCards" element={<ListCards />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
