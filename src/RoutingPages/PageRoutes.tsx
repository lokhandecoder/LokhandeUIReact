import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ClippedDrawer from '../Components/Fixed/ClippedDrawer'
import TextfieldPage from '../Pages/TextfieldPage'

const PageRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<ClippedDrawer children={<HomePage />} />} />
        <Route path='/textfield' element={<ClippedDrawer children={<TextfieldPage />} />} />
    </Routes>
  )
}

export default PageRoutes