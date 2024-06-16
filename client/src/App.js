import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
