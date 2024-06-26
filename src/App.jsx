
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Add from './pages/AddBarang/Add'
import Update from './pages/UpdateBarang/Update';
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home />}/> 
      <Route path='/add'  element={<Add />}/>
      <Route path='/update/:id' element={<Update />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
