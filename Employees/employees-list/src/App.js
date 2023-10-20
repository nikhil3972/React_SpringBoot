import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeList from './components/EmployeeList'
import NotFound from './components/NotFound'
import AddEmployee from './components/AddEmployee'

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<EmployeeList />} exact />
          <Route path="/add-employee" element={<AddEmployee />} exact />
          <Route path="/employees/edit/:id" element={<AddEmployee />} exact />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

