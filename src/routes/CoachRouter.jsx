import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Coach from '../pages/coach/CoachDashboard'

export default function CoachRouter() {
  return (
    <>
    <Routes>
        <Route path="/coach" element={<Coach />} />
    </Routes>
    </>
  )
}
